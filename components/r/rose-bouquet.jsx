import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yj6v0_bcg.css';
import '../../css/q/q60v4z9zr.css';
import '../../css/o/o206qybvr.css';
import '../../css/l/ll-2to-fb.css';
import '../../css/t/txo7yxbkv.css';
import '../../css/o/oopjwfbjb.css';
import '../../css/r/rwczc5bmf.css';
import '../../css/h/hrg-gmw1l.css';
import '../../css/a/aqye6hbjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k yj6v0_bcg"/><path class="q60v4z9zr wm-a"/><path class="o206qybvr wm-deco"/><path class="ll-2to-fb wm-k"/><path class="txo7yxbkv wm-k"/><path class="oopjwfbjb wm-a"/><path class="rwczc5bmf wm-shadow"/><path class="hrg-gmw1l wm-shine"/><path class="aqye6hbjt wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:rose-bouquet"} {...others} />);
}

export default Component;
