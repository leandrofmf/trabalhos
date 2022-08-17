
function compute() {
	var principal = document.getElementById("principal").value;
	if(parseInt(principal) < 1) {
		alert("Insira um valor positivo");
		document.getElementById("principal").focus();
		return;
	}

     // atribuindo taxa, anos e principal a um valor
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;

	var interest = principal * years * rate / 100;

	var today = new Date();
	var year = parseInt(today.getFullYear())+parseInt(years);
// mostrando a mensagem de principal, taxa, juros e ano de saque
	document.getElementById("renderoutput").innerText = ""+principal;
	document.getElementById("interestoutput").innerText = ""+rate + " %";
	document.getElementById("amountoutput").innerHTML = ""+interest;
	document.getElementById("yearoutput").innerText = ""+year;
	showMessage();

	return false;
};

function showRange() {
	var rate = document.getElementById("rate").value;
	document.getElementById("ratevalue").innerHTML = rate + " %";
}

