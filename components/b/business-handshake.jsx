import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wloqi167c.css';
import '../../css/i/i5g12gbui.css';
import '../../css/f/fu_q3ibxu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="wloqi167c"/><path class="i5g12gbui"/><path class="fu_q3ibxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:business-handshake"} {...others} />);
}

export default Component;
