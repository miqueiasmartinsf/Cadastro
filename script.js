let remove = 0;

function on(){
    let button = document.getElementById('modal');
    button.style.display = 'block';

}


function off(){
    let button = document.getElementById('modal');
    button.style.display = 'none';

    
}

function cadastro(){
    let newTr = document.createElement('tr');
    let modal = document.getElementById('modal')
    let table = document.getElementById('table');


    newTr.addEventListener("mouseenter", function(){
        newTr.style.backgroundColor = '#FFF88F'
        newTr.style.transition = '0.5s'
    });

    newTr.addEventListener("mouseleave", function(){
        newTr.style.backgroundColor = 'white'
        newTr.style.transition = '0.5s'
    });


    let nomeCliente = document.getElementById('nomecliente').value;
    let emailCliente = document.getElementById('emailcliente').value;
    let celularCliente = document.getElementById('celularcliente').value;
    let cidadeCliente = document.getElementById('cidadecliente').value;


    let nomeData = document.createElement('td');
    nomeData.innerText = nomeCliente

    let emailData = document.createElement('td');
    emailData.innerText = emailCliente;

    let celularData = document.createElement('td');
    celularData.innerText = celularCliente;

    let cidadeData = document.createElement('td');
    cidadeData.innerText = cidadeCliente;


    // Botão Remover 

    let removeBtn = document.createElement('button');
    removeBtn.style.width = '80px'
    removeBtn.style.height = '30px';
    removeBtn.style.backgroundColor = 'red';
    removeBtn.style.color = 'white';
    removeBtn.style.border = 'none';
    removeBtn.addEventListener("mouseenter", function(){
       this.style.backgroundColor = '#ff6961' 
       this.style.cursor = 'pointer'
    })
    removeBtn.addEventListener("mouseleave", function(){
        this.style.backgroundColor = 'red';
    }); 





    removeBtn.innerText = 'Excluir';
    
    let removeTd = document.createElement('td');
    removeTd.appendChild(removeBtn);

    newTr.appendChild(nomeData);
    newTr.appendChild(emailData);
    newTr.appendChild(celularData);
    newTr.appendChild(cidadeData);
    newTr.appendChild(removeTd);

    table.appendChild(newTr);




    removeBtn.addEventListener("click", (e)=> removeLinha(e));

    function removeLinha(){
        table.removeChild(newTr);
        
    }

    
    modal.style.display = 'none';
}


