let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual o seu nick? ", (nick) => {
    rl.question("Quantos XP você possui? ", (xp) => {
        let rankingXp = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
        let xpNum = parseInt(xp, 10);  // Converte a entrada para número

        let rank;
        if (xpNum < 1000) {
            rank = rankingXp[0];
        } else if (xpNum <= 2000) {
            rank = rankingXp[1];
        } else if (xpNum <= 5000) {
            rank = rankingXp[2];
        } else if (xpNum <= 7000) {
            rank = rankingXp[3];
        } else if (xpNum <= 8000) {
            rank = rankingXp[4];
        } else if (xpNum <= 9000) {
            rank = rankingXp[5];
        } else if (xpNum <= 10000) {
            rank = rankingXp[6];
        } else {
            rank = rankingXp[7];
        }

        const mensagem = "O herói de nome " + nick + " está no nível de " + rank;
        console.log(mensagem);

        rl.close();
    });
});
