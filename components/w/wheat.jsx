import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/r/r0lf5acmb.css';
import '../../css/e/eqfyjobjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGUZz1zcCZ" x1="7.15" x2="16.86" y1="1.25" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGUZz1zcCZ)" class="r0lf5acmb wm-k"/><path class="eqfyjobjn wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:wheat"} {...others} />);
}

export default Component;
