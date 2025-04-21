const inputtext=document.getElementById('text');
const btn=document.getElementById('btn');
const qr=document.getElementById("qr");
const container=document.getElementsByClassName('container');

btn.addEventListener('click',gernerator);
function gernerator() {
  const text = inputtext.value;
if(text==""){
  alert("please enter the something ");
}
else{
 qr.innerHTML="";

new QRCode(qr, {
  text: text,
  width: 300,
  height: 300,
});
qr.style.display = 'flex';
inputtext.value = "";
}
}