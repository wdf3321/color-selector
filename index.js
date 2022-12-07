const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const select = document.getElementById("select");
const red1 = red.value;
const green1 = green.value;
const blue1 = blue.value;
red.oninput = () => {
	redvalue.innerText = red.value;
	select.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
};
blue.oninput = () => {
	bluevalue.innerText = blue.value;
	select.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
};
green.oninput = () => {
	greenvalue.innerText = green.value;
	select.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
};

btnred.onclick = () => {
	const red1 = parseInt(Math.random() * 256);
	red.value = red1;
	redvalue.innerText = red1;
	select.style.backgroundColor = `rgb(${red1}, ${green.value}, ${blue.value})`;
};
btngreen.onclick = () => {
	const green1 = parseInt(Math.random() * 256);
	green.value = green1;
	greenvalue.innerText = green1;
	select.style.backgroundColor = `rgb(${red.value}, ${green1}, ${blue.value})`;
};
btnblue.onclick = () => {
	const blue1 = parseInt(Math.random() * 256);
	blue.value = blue1;
	bluevalue.innerText = blue1;
	select.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue1})`;
};
