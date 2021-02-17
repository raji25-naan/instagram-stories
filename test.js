import test from 'ava'
import {
  getUserByUsername,
  getMediaByCode,
  getStories
} from './index'

const {SESSIONID, USERID} = process.env

test('getUserByUsername', async t => {
  const {user} = await getUserByUsername(
      {username: 'instagram', userid: USERID, sessionid: SESSIONID}
    )
  t.is(user.id, '25025320')
  t.is(user.username, 'instagram')
})

test('getMediaByCode', async t => {
  const {graphql} = await getMediaByCode(
    {code: 'BUu14BdBkO5', userid: USERID, sessionid: SESSIONID})
  t.is(graphql.shortcode_media.id, '1526394270041654201')
})

test('getStories', async t => {
  const {id, user, items, status} = await getStories(
    {id: 25025320, userid: USERID, sessionid: SESSIONID}
  )

  t.is(id, 25025320)
  t.is(user.username, 'instagram')
  t.is(status, 'ok')
  t.true(Array.isArray(items))
})
