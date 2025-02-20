const personagens = [
    {
        nome: "Tony Stark",
        codinome: "Homem de Ferro",
        armaPrincipal: "Armadura Mark L",
        armaSecundaria: "Repulsores e Nanoarmas",
        velocidade: 85,
        forca: 80,
        resistencia: 90,
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Arma secundaria: " + this.armaSecundaria + "\n"
                + "Nível de força: " + this.forca + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia;
        }
    },
    {
        nome: "Steve Rogers",
        codinome: "Capitão América",
        armaPrincipal: "Escudo de Vibranium (Wakanda)",
        armaSecundaria: "Força aprimorada",
        velocidade: 70,
        forca: 75,
        resistencia: 85,
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Arma secundaria: " + this.armaSecundaria + "\n"
                + "Nível de força: " + this.forca + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia;
        }
    },
    {
        nome: "Thor Odinson",
        codinome: "Thor",
        armaPrincipal: "Stormbreaker",
        armaSecundaria: "Mjolnir (antes de Ragnarok)",
        velocidade: 90,
        forca: 100,
        resistencia: 100,
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Arma secundaria: " + this.armaSecundaria + "\n"
                + "Nível de força: " + this.forca + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia;
        }
    },
    {
        nome: "Thanos de Titã",
        codinome: "Thanos",
        armaPrincipal: "Espada",
        armaSecundaria: "Manopla do Infinito",
        velocidade: 50,
        forca: 150,
        resistencia: 100,
        descricao: function () {
            return "Nome do personagem: " + this.nome + "\n"
                + "Codinome do personagem: " + this.codinome + "\n"
                + "Arma principal: " + this.armaPrincipal + "\n"
                + "Arma secundaria: " + this.armaSecundaria + "\n"
                + "Nível de força: " + this.forca + "\n"
                + "Nível de velocidade: " + this.velocidade + "\n"
                + "Nível de resistência: " + this.resistencia;
        }
    }
];

console.log("Lista de Personagens\n");

for (let personagem of personagens) {
    console.log(personagem.descricao());
    console.log("------------------------");
}

let maisForte = personagens[0];

for (let i in personagens) {
    if (personagens[i].forca > maisForte.forca) {
        maisForte = personagens[i];
    }
}

console.log("O personagem mais forte é: " + maisForte.nome + " (" + maisForte.codinome + ")");

console.log("\nComparação de Personagens\n");

for (let p1 of personagens) {
    for (let i in personagens) {
        let p2 = personagens[i];

        if (p1 !== p2) { 
            console.log(p1.codinome + " vs. " + p2.codinome);

            if (p1.velocidade > p2.velocidade) {
                console.log(p1.codinome + " vence em Velocidade (" + p1.velocidade + " vs. " + p2.velocidade + ")");
            } else if (p1.velocidade < p2.velocidade) {
                console.log(p2.codinome + " vence em Velocidade (" + p2.velocidade + " vs. " + p1.velocidade + ")");
            } else {
                console.log("Empate em Velocidade (" + p1.velocidade + " vs. " + p2.velocidade + ")");
            }

            if (p1.forca > p2.forca) {
                console.log(p1.codinome + " vence em Força (" + p1.forca + " vs. " + p2.forca + ")");
            } else if (p1.forca < p2.forca) {
                console.log(p2.codinome + " vence em Força (" + p2.forca + " vs. " + p1.forca + ")");
            } else {
                console.log("Empate em Força (" + p1.forca + " vs. " + p2.forca + ")");
            }

            if (p1.resistencia > p2.resistencia) {
                console.log(p1.codinome + " vence em Resistência (" + p1.resistencia + " vs. " + p2.resistencia + ")");
            } else if (p1.resistencia < p2.resistencia) {
                console.log(p2.codinome + " vence em Resistência (" + p2.resistencia + " vs. " + p1.resistencia + ")");
            } else {
                console.log("Empate em Resistência (" + p1.resistencia + " vs. " + p2.resistencia + ")");
            }

            console.log("------------------------");
        }
    }
}
