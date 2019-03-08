const {join} = require('path');

module.exports = {
	entry: join(__dirname, 'web/index.js'),
	output: {
		path: join(__dirname, 'dist'),
		filename: 'index.bundle.js'
	}
}