var json1 = `{
    "id": 12345678900,
    "nome": "Joel",
    "sobrenome": "Castellano Soler",
    "cidade": "Madrid",
    "pais": "Espanha",
    "imagem": "img/joel.png",
    "link": "https://preview.redd.it/did-anyone-else-find-joels-character-to-be-both-annoying-v0-k45logjq9k0d1.png?auto=webp&s=f92e8f433ce9bd210b41e5a93eb62631d48a78c1"
}`;

var json2 = `{
    "id": 12345678901,
    "nome": "Carla",
    "sobrenome": "Rosón Caleruega",
    "cidade": "Madrid",
    "pais": "Argentina",
    "imagem": "img/carla.png",
    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK76QxEXoZmFWoDg99lAFql7lDhbn1bIRwNw&s"
}`;

var json3 = `{
    "id": 12345678902,
    "nome": "Isadora",
    "sobrenome": "Artíñan",
    "cidade": "Nenhum local registrado",
    "pais": "Argentina",
    "imagem": "img/isadora.png",
    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUoZLBgRKJNzhPx4hyM4864Mnz9sGCKdzNA&s"
}`;

var json4 = `{
    "id": 12345678903,
    "nome": "Polo",
    "sobrenome": "Benavent Villada",
    "cidade": "Madrid",
    "pais": "Espanha",
    "imagem": "img/polo.png",
    "link": "https://static.wikia.nocookie.net/elite-netflix/images/6/67/Season_1_Characters_Portraits_%2818%29.jpg/revision/latest/scale-to-width/360?cb=20200322220850"
}`;

var json5 = `{
    "id": 12345678904,
    "nome": "Ivan",
    "sobrenome": "Carvalho",
    "cidade": "Rio de Janeiro",
    "pais": "Brasil",
    "imagem": "img/ivan.png",
    "link": "https://www.estrelando.com.br/uploads/2023/03/15/andre-lamoglia-elite-anitta-site-1678890311.450x270.jpg"
}`;

var json6 = `{
    "id": 12345678905,
    "nome": "Lucrecia",
    "sobrenome": "Montesinos Hendrich",
    "cidade": "Madrid",
    "pais": "Espanha",
    "imagem": "img/lucrecia.png",
    "link": "https://static.wikia.nocookie.net/elite/images/2/24/Lucrecia_Elite_Uniforme.jpg/revision/latest/scale-to-width-down/250?cb=20230407152825&path-prefix=fr"
}`;

var json7 = `{
    "id": 12345678906,
    "nome": "Cayetana",
    "sobrenome": "Grajera Pando",
    "cidade": "Madrid",
    "pais": "Espanha",
    "imagem": "img/cayetana.png",
    "link": "https://media.hugogloss.uol.com.br/uploads/2020/03/cayetana.jpg"
}`;

var json8 = `{
    "id": 12345678907,
    "nome": "Patrick",
    "sobrenome": "Blanco Commerford",
    "cidade": "Londres",
    "pais": "Reino Unido",
    "imagem": "img/patrick.png",
    "link": "https://br.web.img2.acsta.net/newsv7/21/06/26/20/46/1794998.jpg"
}`;

var json9 = `{
    "id": 12345678908,
    "nome": "Sara",
    "sobrenome": "Bak",
    "cidade": "Madrid",
    "pais": "Espanha",
    "imagem": "img/sara.png",
    "link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IYT82CTG2OE6K3zTbQzOWP5_BUVKBmwn9gzX-HyaReavM8xr21nHdCqDZSjIOXPWkhI&usqp=CAU"
}`;

var json10 = `{
    "id": 123456789009,
    "nome": "Marina",
    "sobrenome": "Nunier Osuna",
    "cidade": "Madrid",
    "pais": "Espanha",
    "imagem": "img/marina.png",
    "link": "https://pbs.twimg.com/media/EawBN2wWAAIAwo5.jpg:large"
}`;


var dados1 = JSON.parse(json1);
var dados2 = JSON.parse(json2);
var dados3 = JSON.parse(json3);
var dados4 = JSON.parse(json4);
var dados5 = JSON.parse(json5);
var dados6 = JSON.parse(json6);
var dados7 = JSON.parse(json7);
var dados8 = JSON.parse(json8);
var dados9 = JSON.parse(json9);
var dados10 = JSON.parse(json10);


function valor() {
    var identificador = Number(document.getElementById('valorDigitado').value);
    var encontrado;

    if (identificador === dados1.id) {
        encontrado = dados1;
    } else if (identificador === dados2.id) {
        encontrado = dados2;
    } else if (identificador === dados3.id) {
        encontrado = dados3;
    } else if (identificador === dados4.id) {
        encontrado = dados4;
    } else if (identificador === dados5.id) {
        encontrado = dados5;
    } else if (identificador === dados6.id) {
        encontrado = dados6;
    } else if (identificador === dados7.id) {
        encontrado = dados7;
    } else if (identificador === dados8.id) {
        encontrado = dados8;
    } else if (identificador === dados9.id) {
        encontrado = dados9;
    } else if (identificador === dados10.id) {
        encontrado = dados10;
    }

    if (encontrado) {
        document.getElementById('imagem').innerHTML = `<img src="${encontrado.imagem}" width="200px">`;
        document.getElementById('nome').innerHTML = encontrado.nome;
        document.getElementById('sobrenome').innerHTML = encontrado.sobrenome;
        document.getElementById('cidade').innerHTML = encontrado.cidade;
        document.getElementById('pais').innerHTML = encontrado.pais;
        document.getElementById('link').innerHTML = `<a href="${encontrado.link}" target="_blank">Visite o site</a>`;
        document.getElementById('erro').innerHTML = "";
    } else {
        document.getElementById('erro').innerHTML = "Registro Inválido";
        document.getElementById('imagem').innerHTML = "";
        document.getElementById('nome').innerHTML = "";
        document.getElementById('sobrenome').innerHTML = "";
        document.getElementById('cidade').innerHTML = "";
        document.getElementById('pais').innerHTML = "";
        document.getElementById('link').innerHTML = "";
    }

}
