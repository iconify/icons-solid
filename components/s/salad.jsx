import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/j/jt49accap.css';
import '../../css/a/avv4zacaa.css';
import '../../css/s/secn-tb3v.css';
import '../../css/x/xr6a96dts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG5rYA0APb" x1="2.05" x2="22.24" y1="2.01" y2="21.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVG5rYA0APb)" class="jt49accap wm-k"/><path fill="url(#SVG5rYA0APb)" class="avv4zacaa wm-a"/><path class="secn-tb3v wm-shine"/><path class="wm-shine xr6a96dts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:salad"} {...others} />);
}

export default Component;
