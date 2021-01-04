function insert(num) {
	// body...
	document.form.hasil.value = document.form.hasil.value + num;
}

function equal() {
	// body...
	const exp = document.form.hasil.value;
	if (exp) {
		document.form.hasil.value = eval(exp);
	}
}

function clean() {
	// body...
	document.form.hasil.value = "";
}

function back() {
	// body...
	const exp = document.form.hasil.value;
	document.form.hasil.value = exp.substring(0, exp.length-1);
}
