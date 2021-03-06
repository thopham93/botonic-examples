import React from 'react'
import { RequestContext, Text, Button, WebchatSettings } from '@botonic/react'

export default class extends React.Component {
  static contextType = RequestContext
  static async botonicInit(request) {
    const hasCancel = request.input.payload || false
    return { hasCancel }
  }

  render() {
    let _ = this.context.getString
    return (
      <>
        {this.props.hasCancel ? (
          <Text>
            {_('bye.cancel')} <Button payload='hi'>{_('start_again')}</Button>
          </Text>
        ) : (
          <Text>
            {_('bye.confirm')} <Button payload='hi'>{_('start_again')}</Button>
          </Text>
        )}
        <WebchatSettings enableUserInput={false} />
      </>
    )
  }
}
