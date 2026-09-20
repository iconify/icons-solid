import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d_j0kmb_r.css';
import '../../css/o/ov059fnuf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="d_j0kmb_r"/><circle class="ov059fnuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:mail-chat-bubble-square-warning-bubble-square-messages-notification-chat-message-warning-alert"} {...others} />);
}

export default Component;
