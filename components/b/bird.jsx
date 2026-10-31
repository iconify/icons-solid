import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/v/v7qbzlfcz.css';
import '../../css/f/f73ldlv7r.css';
import '../../css/h/hsy7hk2ax.css';
import '../../css/d/d08oi7b7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGzgsCpbJf" x1="1.5" x2="22.49" y1="3.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path stroke="url(#SVGzgsCpbJf)" class="v7qbzlfcz wm-k"/><path fill="url(#SVGzgsCpbJf)" class="f73ldlv7r wm-a"/><path class="hsy7hk2ax wm-shine"/><path class="d08oi7b7v wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:bird"} {...others} />);
}

export default Component;
