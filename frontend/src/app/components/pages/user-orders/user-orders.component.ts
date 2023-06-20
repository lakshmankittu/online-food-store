import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent {
  cart!:any;
  constructor(private orderserive: OrderService) {
    this.orderserive.getOrderForCurrentUser().subscribe((cart) => {
      this.cart = cart;
      console.log(cart);
    })
   }

  ngOnInit(): void {
  }

 


}
