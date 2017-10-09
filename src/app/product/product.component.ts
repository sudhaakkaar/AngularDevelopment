import { Component} from '@angular/core';
import {Product} from './product'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  productName: string ='LED TV 56 Inches';
  hidden:boolean=false;
  products:Product[]=[{id:1,name:'LED TV',price:9000},
  {id:1,name:'AC',price:10000}];
    
  constructor() { 


  }

  toggle(){
    this.hidden=!this.hidden
  }

}
