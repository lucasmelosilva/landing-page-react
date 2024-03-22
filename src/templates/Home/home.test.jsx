import { screen } from '@testing-library/react'
import Home from '.'
import { renderTheme } from '../../utils/renderTheme'

test('render learn react link', () => {
  const {debug} = renderTheme(<Home />)
  const headingContainer = screen.getByRole('heading', { name: 'Hello'})
    .parentElement
  expect(headingContainer).toHaveStyle({
    background: 'blue'
  })
  expect(headingContainer).toMatchSnapshot()
})