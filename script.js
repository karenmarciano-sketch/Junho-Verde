const dicas = [
    "💧 Feche a torneira ao escovar os dentes.",
    "🌱 Plante uma flor ou árvore.",
    "♻️ Separe materiais recicláveis.",
    "🛍️ Utilize sacolas reutilizáveis.",
    "🚲 Caminhe ou use bicicleta quando possível.",
    "🔌 Tire aparelhos da tomada quando não estiver usando."
];

function gerarDica() {
    const sorteio = Math.floor(Math.random() * dicas.length);

    document.getElementById("dica").textContent =
        dicas[sorteio];
}

const fundo = document.querySelector(".bees");

for(let i = 0; i < 12; i++){

    const bee = document.createElement("div");

    bee.classList.add("bee");

    bee.innerHTML = "🐝";

    bee.style.top = Math.random() * 100 + "%";

    bee.style.animationDuration =
        (10 + Math.random() * 10) + "s";

    bee.style.fontSize =
        (20 + Math.random() * 20) + "px";

    fundo.appendChild(bee);
}
