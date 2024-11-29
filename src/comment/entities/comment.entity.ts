import { ObjectType, Field, Int } from '@nestjs/graphql'
import { User } from '../../user/entities/user.entity'

@ObjectType()
export class Comment {
  @Field(() => Int)
  id: number

  @Field()
  text: string

  @Field(() => Int)
  userId: number

  @Field(() => User)
  user: User

  @Field(() => [Comment], { nullable: true })
  replies?: Comment[]

  @Field(() => Comment, { nullable: true })
  parent?: Comment

  @Field(() => Int, { nullable: true })
  parentId?: number

  @Field()
  createdAt: Date
}