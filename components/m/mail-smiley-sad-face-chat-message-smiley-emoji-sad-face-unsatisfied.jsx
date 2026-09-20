import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q-ycozr2u.css';
import '../../css/h/h6m0x8ani.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="q-ycozr2u"/><path class="h6m0x8ani"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:mail-smiley-sad-face-chat-message-smiley-emoji-sad-face-unsatisfied"} {...others} />);
}

export default Component;
