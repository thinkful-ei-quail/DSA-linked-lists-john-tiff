class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head); // left side is item and right side is same item but adding to list
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    insertBefore(newItem, targetItem) {
        let currNode = this.head
        let previousNode = null
        if (!currNode) {
           return this.head = new _Node(newItem, null)
        }
        while (currNode.value !== targetItem) {
            if (currNode.next === null) {
                return null;
            }
            else {
                previousNode = currNode
                currNode = currNode.next;
            }
        }
        if (previousNode === null) {
            return this.head = new _Node(newItem, this.head)
        }
        return previousNode.next = new _Node(newItem, currNode)
    }

    insertAfter(newItem, targetItem) {
       const targetNode = this.find(targetItem)
       if (targetNode) {
           targetNode.next = new _Node(newItem, targetNode.next) // left side is the target and next describes what's after, right side is inserting new node
        }
    }
    insertAt(newItem, i) {
        let currNode = this.head
        if (i === 0) {
            return this.head = new _Node(newItem, null)
        }
        for (let j = 1; j < i ; j++) {
            if (currNode.next === null) {
                return currNode.next = new _Node(newItem, currNode.next)
            }
            currNode = currNode.next
        }
        return currNode.next = new _Node(newItem, currNode.next)
    }
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;  // steps to next node
            }
        }
        // Found it
        return currNode;
    }
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('ERROR: Item not found');
            return;
        }
        previousNode.next = currNode.next;  // removes item
    }
}

display = (list) => {
    let currNode = list.head
    console.log('-~-head-~-')
    while (currNode !== null) {
        console.log(currNode.value)
        currNode = currNode.next
    }
    console.log('-~-tail-~-')
}

lengthOf = (list) => {
    let currNode = list.head
    let total = 0
    while (currNode !== null) {
        currNode = currNode.next
        ++total
    }
    return total
}

isEmpty = (list) => list.head === null

findPrevious = (list, targetItem) => {
    let currNode = list.head
    let previousNode = null
    while (currNode && currNode.value !== targetItem ) {
        previousNode = currNode
        currNode = currNode.next
    }
    if (currNode === null) {
        return 'item not found'
    }
    return previousNode
}

findLast = (list) => {
    let currNode = list.head
    let toe = null
    while (currNode !== null) {
        toe = currNode
        currNode = currNode.next
    }
    return toe
} 

main = () => {
    const SLL = new LinkedList() 
    SLL.insertFirst('Apollo')
    SLL.insertFirst('Boomer')
    SLL.insertFirst('Helo')
    SLL.insertFirst('Husker')
    SLL.insertFirst('Starbuck')
    SLL.insertFirst('Tauhida')
    SLL.remove('Squirrel')
    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')
    SLL.insertAt('Kat', 2)
    SLL.remove('Tauhida')
    display(SLL)
    console.log(lengthOf(SLL))
    return SLL
}
main()

// 4. Mystery Program
// (Q): What does it do? What's it's time complexity?
// (A) Finds any duplicates and removes them
// (A) O(n^2) bc loops are nested inside one another
/*
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next; // removes duplicate
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
*/

// 5. Reverse a List
// run through list
// push ea node to end of list
// keep track of last node
// stop once last node = first

// reverse = (list) => {
//     let currNode = list.head
//     while (currNode !== null) {
//         currNode = currNode.next
//     }
// }

let tail 
reverseRecursion = (node) => {
    if (node.next === null) { return tail = node} // exit
    const sublistTail = reverseRecursion(node.next);
    sublistTail.next = node;
    return node; 
}

reverse = (list) => {
    reverseRecursion(list.head)
}

(1, 2, 3, 4, 5)