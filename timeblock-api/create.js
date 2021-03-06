
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      userName: data.userName,
      date: data.date,
      timeslot: data.timeslot,
      task: data.task,
    }
  };
  try{
    await dynamoDb.put(params);
  } catch (e) {
    return e;
  }

  return params.Item;
});