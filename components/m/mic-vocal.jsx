import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/f/fqwp2fb_x.css';
import '../../css/g/ggolxi-co.css';
import '../../css/a/aguftseji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGOxIG7cVN" x1="0" x2="0" y1="2.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGrLJTzdwx" x1="3.5" x2="21.48" y1="2.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGOxIG7cVN)" stroke="url(#SVGrLJTzdwx)" class="fqwp2fb_x wm-k"/><path class="ggolxi-co wm-shine"/><path class="aguftseji wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:mic-vocal"} {...others} />);
}

export default Component;
