import item from './item.js';
   let items = [];
   let hideCheckedItems = false;
 


  function findById(id) {
  return items.find(object => {
      return object.id ===id});
  }
  
  function addItem(name) {
      try {
          item.validateName(name);
            this.items.push(item.create(name));
      }
      catch(error) {
          console.log(`Cannot add item: ${error.message}`);
      }
  }

  function findAndToggleChecked(id) {
   const foundItem = this.findById(id);
   foundItem.checked = !foundItem.checked;
  }

  function findAndUpdateName(id, newName) {
    try {
        item.validateName(name);
     let found =this.findById(id);
     found.name=newName;
    }
    catch(error) {
        console.log(`Cannot update name: ${error.message}`);
    }
  }

  function findAndDelete(id) {
    this.items = this.items.filter(function(id){
    });
  }

  function toggleCheckedFilter() {
      this.hideCheckedItems === !this.hideCheckedItems;
  }
  export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
  };