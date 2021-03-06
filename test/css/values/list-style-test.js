"use strict";
var util = require('./util');

exports.batch = util.makeVows('list-style', {
	'url(images/test-image.png)': {
		'tokens': ['URL'],
		'toString': 'url(images/test-image.png)',
		'unparsed': [],
		'warnings': []
	},
	'inherit': {
		'tokens': ['IDENT'],
		'toString': 'inherit',
		'unparsed': [],
		'warnings': ['css-minimum:2']
	},
	'invalidValue': {
		'tokens': ['IDENT'],
		'toString': null,
		'unparsed': ['IDENT'],
		'warnings': null
	}
});
