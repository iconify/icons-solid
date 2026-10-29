import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oxoykcbef.css';
import '../../css/o/oe1qgp6zr.css';
import '../../css/x/xn5jby14h.css';
import '../../css/v/vb-0tmbnj.css';
import '../../css/i/ie-xi4bjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="oxoykcbef wm-k"/><path class="oe1qgp6zr wm-a"/><path class="wm-shadow xn5jby14h"/><path class="vb-0tmbnj wm-k"/><path class="ie-xi4bjz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:check-check-engrave"} {...others} />);
}

export default Component;
