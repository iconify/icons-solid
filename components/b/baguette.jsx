import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/p/pnu846n5p.css';
import '../../css/b/b_k9_mb_e.css';
import '../../css/w/whzmh64zl.css';
import '../../css/v/v80tojbfc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGcPgCpoDF" x1="9" x2="15" y1="1.74" y2="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGcPgCpoDF)" class="pnu846n5p"/><path class="b_k9_mb_e wm-shine"/><path class="whzmh64zl wm-shine"/><path class="v80tojbfc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:baguette"} {...others} />);
}

export default Component;
