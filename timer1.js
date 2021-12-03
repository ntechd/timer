let arguments = process.argv.slice(2).map(Number);
arguments = arguments.filter(e=>!isNaN(e));

for(let i of arguments)
{
	setTimeout(()=>{
	//process.stdout.write('\x07');
	process.stdout.write('.');
	},i*1000);	
}