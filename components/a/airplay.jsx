import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/w/wb98tybck.css';
import '../../css/v/vbphnoxvp.css';
import '../../css/y/ybhq7oeot.css';
import '../../css/x/xg47h2b1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGKZDiwdQA" x1="0" x2="0" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGl2ylbces" x1="1" x2="23" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGKZDiwdQA)" stroke="url(#SVGl2ylbces)" class="wb98tybck wm-k"/><path fill="url(#SVGl2ylbces)" class="vbphnoxvp wm-a"/><path class="wm-shine ybhq7oeot"/><path class="wm-shine xg47h2b1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:airplay"} {...others} />);
}

export default Component;
