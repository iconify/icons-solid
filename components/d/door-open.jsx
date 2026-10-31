import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/s/seq9wqr-y.css';
import '../../css/h/h46ss9o-u.css';
import '../../css/m/mu6hdkfdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGD9tYmeZw" x1="0" x2="0" y1="2" y2="23.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGPQ6vJeIC" x1=".51" x2="23.49" y1="2" y2="23.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGD9tYmeZw)" stroke="url(#SVGPQ6vJeIC)" class="seq9wqr-y wm-k"/><path class="h46ss9o-u wm-shine"/><path class="mu6hdkfdx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:door-open"} {...others} />);
}

export default Component;
