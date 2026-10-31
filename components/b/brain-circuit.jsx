import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/h/hxlhm5bsv.css';
import '../../css/n/nq8ecgq1d.css';
import '../../css/v/vfh2holcf.css';
import '../../css/b/b1g0u4b4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGko8wie6n" x1="1.4" x2="21.5" y1="2.93" y2="21.62" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGko8wie6n)" class="hxlhm5bsv wm-k"/><path class="nq8ecgq1d wm-a"/><path class="vfh2holcf wm-shine"/><path class="b1g0u4b4f wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:brain-circuit"} {...others} />);
}

export default Component;
