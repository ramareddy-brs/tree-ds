/** 
 Author : Build Rise Shine 

Created : 2023 

Script : Binary Search Tree 

Description : Implementation of BST Data Structure

  The BST class represents a custom implementation of a Binary Search Tree (BST) data structure in JS. 
  It provides methods to perform basic operations on a BST, such as inserting elements in their proper 
  places and checking if a specific value is present in the tree. 
  
  A BST is a binary tree data structure in which each node has at most two children. The left child of 
  a node contains values less than the node's value, and the right child contains values greater than 
  the node's value. The example demonstrates how to create an instance of the BST class and perform insert 
  and contains operations on it.


(c) Copyright by BRS Studio. 
**/

// Class for creating a Node
class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}
class Tree {
  constructor() {
    this.root = null
  }
  isEmpty(){
    return this.root === null
  }
  insertion(value){
    const newNode = new Node(value);
    if(this.isEmpty()){
      this.root = newNode
    }else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(root, newNode){
     if(newNode.value < root.value){
      if(root.left === null){
        root.left = newNode
      }else {
        this.insertNode(root.left, newNode)
      }
     }else {
      if(root.right === null){
        root.right = newNode
      }else {
        this.insertNode(root.right, newNode)
      }
     }
  }
  search(root, value){
    if(!root){
      return false
    }else {
      if(root.value === value){
        return true
      }else if(value < root.value){
        return this.search(root.left, value)
      }else {
        return this.search(root.right, value)
      }
    }
  }
}
const tree = new Tree();
console.log(tree.isEmpty());
tree.insertion(10);
tree.insertion(5);
tree.insertion(15);
tree.insertion(3);
tree.insertion(7);

console.log(tree.search(tree.root, 10));
console.log(tree.search(tree.root, 5));
console.log(tree.search(tree.root, 15));

console.log("The BST is");
console.log(tree);
