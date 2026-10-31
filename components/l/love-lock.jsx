import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/u/u0nd9pvgj.css';
import '../../css/l/lkfb45byu.css';
import '../../css/m/mb2mhgbni.css';
import '../../css/u/uhwgahbdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGCK9Bfbjb" x1="0" x2="0" y1="3" y2="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGp0Ba6cuS" x1="3.77" x2="20.25" y1="3" y2="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGCK9Bfbjb)" stroke="url(#SVGp0Ba6cuS)" class="u0nd9pvgj wm-k"/><path fill="url(#SVGp0Ba6cuS)" class="lkfb45byu wm-a"/><path class="mb2mhgbni wm-shine"/><path class="uhwgahbdz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:love-lock"} {...others} />);
}

export default Component;
