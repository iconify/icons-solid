import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/k/kpf7orada.css';
import '../../css/r/ryt-87f7h.css';
import '../../css/h/hh4eaqb9m.css';
import '../../css/l/los940bjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGe9cNPdHI" x1=".99" x2="23" y1=".99" y2="22.61" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGe9cNPdHI)" class="kpf7orada wm-k"/><path class="ryt-87f7h wm-a"/><path class="hh4eaqb9m wm-shine"/><path class="los940bjt wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:tennis"} {...others} />);
}

export default Component;
