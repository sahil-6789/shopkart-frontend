// A mock function to mimic making an async request for data
export function addToCart(item) {
  return new Promise(async(resolve) =>{
   const response=await  fetch('/cart',{
    method:'POST',
    body:JSON.stringify(item),
    headers:{'content-type': 'application/json'}
   })
   const data=await response.json()
   resolve({data})
  }
  );
}



export function fetchItemsByUserId() {
  console.log()
  return new Promise(async(resolve) =>{
    //TODO : we will not hardcoder server URL
   const response=await  fetch('/cart');
   const data=await response.json()
   resolve({data})
  }
  );
}


export function updateCart(update) {
  return new Promise(async(resolve) =>{
   const response=await  fetch('/cart/'+update.id,{
    method:'PATCH',
    body:JSON.stringify(update),
    headers:{'content-type': 'application/json'}
   })
   const data=await response.json()
   resolve({data})
  }
  );
}


export function deleteItemFromCart(itemId) {
  return new Promise(async(resolve) =>{
   const response=await  fetch('/cart/'+itemId,{
    method:'DELETE',
    headers:{'content-type': 'application/json'}
   })
   const data=await response.json()
   resolve({data:{id:itemId}});
  }
  );
}


 export  function resetCart() {
return new Promise(async (resolve) => {
  const response = await fetchItemsByUserId();
  const items = response.data;
  console.log(items);
  for (let item of items) {
    await deleteItemFromCart(item.id);
  }
  resolve({status:'success'})
  });
}