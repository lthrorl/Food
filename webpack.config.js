'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src'
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
