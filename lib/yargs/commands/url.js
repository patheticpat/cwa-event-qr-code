'use strict'

const { createEventQRCode } = require('../../index')
const {
  addOptionsForLocationData,
  addOptionsForVendorData,
  getLocationDataFromArgv,
  getVendorDataFromArgv
} = require('../yargs-util')

module.exports = () => {
  return {
    command: ['url'],
    desc: 'print a location url on the terminal',
    builder: yargs => {
      addOptionsForLocationData(yargs)
      addOptionsForVendorData(yargs)
    },
    handler: async argv => {
      const locationData = getLocationDataFromArgv(argv)
      const vendorData = getVendorDataFromArgv(argv)
      const eventQRCode = createEventQRCode({ locationData, vendorData })

      console.log(await eventQRCode.toURL())
    }
  }
}