const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  const file = cmd.slice(4);

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd.slice(0, 3) === 'cat') {
    cat(file);
  } else {
    process.stdout.write('Invalid command: ' + cmd);
  }
});
