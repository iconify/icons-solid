import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zc3svkblt.css';
import '../../css/q/qlt110b9c.css';
import '../../css/w/w583c8bvr.css';
import '../../css/x/x4f5csbcx.css';
import '../../css/s/s2pgaqb_e.css';
import '../../css/a/am6ha4bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow zc3svkblt"/><path class="qlt110b9c"/><path class="w583c8bvr"/><path class="x4f5csbcx"/><path class="s2pgaqb_e"/><path class="am6ha4bdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:badge-percent"} {...others} />);
}

export default Component;
