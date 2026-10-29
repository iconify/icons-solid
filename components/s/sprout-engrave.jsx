import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qyfmmpgqr.css';
import '../../css/x/x96k-accp.css';
import '../../css/q/q-ykn3bot.css';
import '../../css/z/z-a4k4b8u.css';
import '../../css/w/wneoubc6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qyfmmpgqr wm-k"/><path class="wm-a x96k-accp"/><path class="q-ykn3bot wm-shadow"/><path class="wm-k z-a4k4b8u"/><path class="wm-a wneoubc6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sprout-engrave"} {...others} />);
}

export default Component;
