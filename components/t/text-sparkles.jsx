import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/o/ol5jnbdeq.css';
import '../../css/k/ktl0_vjnv.css';
import '../../css/u/ud4m29h6y.css';
import '../../css/n/ne3rj-i6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBsRmKeFE" x1="9" x2="15" y1="4.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="ol5jnbdeq wm-s"/><path fill="url(#SVGBsRmKeFE)" class="ktl0_vjnv"/><path class="ud4m29h6y wm-s"/><path class="ne3rj-i6n wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:text-sparkles"} {...others} />);
}

export default Component;
