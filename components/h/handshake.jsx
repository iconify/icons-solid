import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hc9r--a3l.css';
import '../../css/y/y0b5-nb-u.css';
import '../../css/f/faen-cbmq.css';
import '../../css/k/k2d1_1brv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="hc9r--a3l wm-shadow"/><path class="y0b5-nb-u"/><path class="faen-cbmq"/><path class="k2d1_1brv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:handshake"} {...others} />);
}

export default Component;
