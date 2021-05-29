#!/usr/bin/env node

'use strict'

// for some unknown reason, a test environment has decided to omit require.main
delete require.main

var parser = require('../../')(process.argv.slice(2), undefined, require)

console.log(parser.parserConfiguration({
  'dot-notation': false,
  'boolean-negation': false
}).argv)
