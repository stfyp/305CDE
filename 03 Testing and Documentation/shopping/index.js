'use strict'

const readline = require('readline-sync')

var list = require('./modules/shopping')

do {
	var input = String(readline.question('enter command: ')).trim()
	if (input.indexOf('add ') === 0) {
		let space = input.indexOf(' ')
		let item = input.substring(space).trim()
		console.log('adding "'+item+'"')
		list.add(item)
	}
	if (input.indexOf('list') === 0) {
		const items = list.getAll()
		let i = 1
		for (var value of items.values()) {
			/* process.stdout.write prints to the terminal without adding a newline character at the end. the \t character inserts a tab and the \n character inserts a newline */
			process.stdout.write(i+'. '+value.title)
			process.stdout.write("\t x"+value.qty+"\n")
			i++
		}
	}
} while (input !== 'exit')
