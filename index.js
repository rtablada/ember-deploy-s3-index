/* jshint node: true */
'use strict';

var S3IndexAdapter = require('./lib/s3-index');

module.exports = {
  name: 'ember-deploy-redis',
  type: 'ember-deploy-addon',

  adapters: {
    index: {
      's3-index': S3IndexAdapter
    }
  }
};
