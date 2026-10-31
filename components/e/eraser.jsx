import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sw37aabtk.css';
import '../../css/n/nwwvoibzp.css';
import '../../css/m/mzwobbc-v.css';
import '../../css/v/vvawe3u2y.css';
import '../../css/w/wpn94cc7d.css';
import '../../css/u/u6rhwsg4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sw37aabtk wm-shadow"/><path class="nwwvoibzp"/><path class="mzwobbc-v"/><path class="vvawe3u2y"/><path class="wpn94cc7d"/><path class="u6rhwsg4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:eraser"} {...others} />);
}

export default Component;
