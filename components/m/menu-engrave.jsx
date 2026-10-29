import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vnen35bwe.css';
import '../../css/w/w_4zjac6j.css';
import '../../css/d/dqueh1r5k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vnen35bwe"/><path class="w_4zjac6j wm-shadow"/><path class="dqueh1r5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:menu-engrave"} {...others} />);
}

export default Component;
