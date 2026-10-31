import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/j/jriw1fmyl.css';
import '../../css/s/s67gcgsyy.css';
import '../../css/y/yupo1_bwi.css';
import '../../css/o/o86uv7b4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG4VJTgdaL" x1="2.5" x2="21" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVG4VJTgdaL)" class="jriw1fmyl wm-k"/><path class="s67gcgsyy wm-a"/><path class="wm-shine yupo1_bwi"/><path class="o86uv7b4q wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:golf"} {...others} />);
}

export default Component;
