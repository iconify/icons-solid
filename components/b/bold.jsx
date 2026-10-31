import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/g/gxi5ccbof.css';
import '../../css/l/luuac7ltg.css';
import '../../css/k/ktyz3cc2t.css';
import '../../css/p/p4g8bosto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGMEqEgdLs" x1="9" x2="15" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGMEqEgdLs)" class="gxi5ccbof"/><path class="luuac7ltg wm-shine"/><path class="ktyz3cc2t wm-shine"/><path class="p4g8bosto wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:bold"} {...others} />);
}

export default Component;
