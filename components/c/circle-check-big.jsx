import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh1kkob1l.css';
import '../../css/o/o7mwsacit.css';
import '../../css/m/m7b3m4blq.css';
import '../../css/t/tpe61zbnm.css';
import '../../css/i/i7jq6qbvv.css';
import '../../css/g/gq30hysxd.css';
import '../../css/w/w8lzp4m2x.css';
import '../../css/c/ctc3_zugy.css';
import '../../css/n/nmhleflyb.css';
import '../../css/b/b506s1bub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQc3tC3Al" x1="0" x2="0" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="wh1kkob1l"/><stop offset=".45" class="wh1kkob1l"/><stop offset="1" class="o7mwsacit"/></linearGradient><linearGradient id="SVGAl1fQbgI" x1="1.5" x2="22.5" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="m7b3m4blq"/><stop offset=".28" class="tpe61zbnm"/><stop offset=".5" class="m7b3m4blq"/><stop offset=".78" class="i7jq6qbvv"/><stop offset="1" class="m7b3m4blq"/></linearGradient></defs><path fill="url(#SVGQc3tC3Al)" stroke="url(#SVGAl1fQbgI)" class="gq30hysxd wm-k"/><path class="w8lzp4m2x wm-shine"/><path class="ctc3_zugy wm-shine"/><path class="nmhleflyb wm-shine"/><path class="b506s1bub wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:circle-check-big"} {...others} />);
}

export default Component;
