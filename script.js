

document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', function () {
            // Verifique se a caixa clicada está ativa
            const isActive = this.classList.contains('active');

            // Fecha todas as caixas e remove a classe 'active'
            boxes.forEach(b => b.classList.remove('active'));

            // Adiciona a classe 'active' apenas à caixa clicada, se não estiver ativa
            if (!isActive) {
                this.classList.add('active');
            }
        });
    });
});

var links = document.getElementsByClassName('dropdown-item');
for(var i=0, len=links.length; i < len; i ++){
    links[i].target = '_blank';
}
 





