	//	Variaveis
	var input= document.querySelector("textarea");
	var saida= document.querySelector(".resposta");
	var cript= document.querySelector(".button1");
	var descript= document.querySelector(".button2");
	var copiar= document.querySelector(".conteudo-copiar");
	var copiado= document.querySelector(".texto-copiado");
	let textCript;
	let textDecript;

	//Função criptografar
    function criptografar(){
		if (input.value != "") {
	    textCript = input.value.replace(/e/g, "enter");
	    textCript = textCript.replace(/i/g, "imes");
	    textCript = textCript.replace(/a/g, "ai");
	    textCript = textCript.replace(/o/g, "ober");
	    textCript = textCript.replace(/u/g, "ufat");

	     saida.textContent = textCript;
	    copiar.classList.add("showbutton");
	    input.value = "";
	  }
	}
	//Função descriptografar
	function descriptografar() {
	  if (input.value != "") {
	    textCript = input.value.replace(/enter/g, "e");
	    textCript = textCript.replace(/imes/g, "i");
	    textCript = textCript.replace(/ai/g, "a");
	    textCript = textCript.replace(/ober/g, "o");
	    textCript = textCript.replace(/ufat/g, "u");

	    saida.textContent = textCript;
	    copiar.classList.add("showbutton");
	    input.value = "";
	  }
	}
	//Função copiar o texto
	function copiarTexto() {
	  navigator.clipboard.writeText(saida.textContent);
	  copiado.classList.add("show");
	  setTimeout("removerBotao()", 2000);
	}
	//Função para sumir a mensagem "texto copiado"
	function removerBotao() {
	  copiado.classList.remove("show");
	}
	//eventos botões
	cript.addEventListener("click", criptografar);

	descript.addEventListener("click", descriptografar);

	copiar.addEventListener("click", copiarTexto);