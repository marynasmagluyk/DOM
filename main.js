var form = document.getElementById('addForm');
var ul = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
ul.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);


function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('input');
    var li = document.createElement('li');
    var deleteBtn = document.createElement('button');

    li.className = 'list-group-item';
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    li.appendChild(document.createTextNode(newItem.value));
    deleteBtn.appendChild(document.createTextNode('X'));


    li.appendChild(deleteBtn);
    ul.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            ul.removeChild(li);
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = ul.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}