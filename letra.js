const gabarito = "VENTO";

const linha1 = document.getElementById("L1");
const linha2 = document.getElementById("L2");
const linha3 = document.getElementById("L3");
const linha4 = document.getElementById("L4");
const linha5 = document.getElementById("L5");
const linha6 = document.getElementById("L6");

const res1 = document.getElementById("res1");
const res2 = document.getElementById("res2");
const res3 = document.getElementById("res3");
const res4 = document.getElementById("res4");
const res5 = document.getElementById("res5");
const res6 = document.getElementById("res6");

const btn = document.querySelectorAll(".btntest");

const palavraGabarito = gabarito.split("");

// function win() {
//     if (linha1 == gabarito || linha2 == gabarito) {
//         console.log("Você ganhou!")
//     }
//         return
// }

function testar(e) {
  // o e, é o evento de click
  //o currentTarget é o nosso botão
  //o previousElementSibling é o elemento anterior ao botão, ou seja, o input
  //como agora conseguimos acessar o input, usamos o value no final para acessar o valor dentro do input

  const input = e.currentTarget.previousElementSibling;
  const palavraPorLetra = input.value.toUpperCase().split("");

  if (
    palavraPorLetra.join("").toLowerCase() ===
    palavraGabarito.join("").toLowerCase()
  ) {
    alert("parabéns!!!");
  }
  //   const comparaPalavra = palavraGabarito.filter((item) =>
  //     palavraPorLetra.includes(item)
  //   );

  const inputId = input.id.slice(-1);
  const linha = document.getElementById(`res${inputId}`);

  palavraPorLetra.forEach((current, index) => {
    //PRECISAMOS CHECAR A POSIÇÃO CORRETA, NO INDICE EXATO CONFORME PALAVRA GABARITO
    //indexOf está checando a primeira aparição da letra
    //
    const letra1 = document.createElement("span");
    if (
      palavraPorLetra.join("").charAt(index) ===
      palavraGabarito.join("").charAt(index)
    ) {
      letra1.style.backgroundColor = "greenyellow";
    } else if (
      palavraGabarito.includes(current) &&
      palavraPorLetra.indexOf(current) !==
        palavraGabarito.join("").charAt(palavraPorLetra.indexOf(current))
    ) {
      letra1.style.backgroundColor = "goldenrod";
    }
    letra1.innerText = current;
    linha.appendChild(letra1);
  });
  // res3.innerHTML = `Seu chute 1 acertou as seguintes letras: ${igual1}`
  e.currentTarget.disabled = true;
  //   const igual2 = wordgab.filter((item) => word2.includes(item));
}

btn.forEach((current) => {
  current.addEventListener("click", () => testar(event));
});

// document.addEventListener("keyup")

//DEIXAR COMENTÁRIOS AQUI, FALANDO SOBRE AS FUNÇÕES. precisa ter classe.
