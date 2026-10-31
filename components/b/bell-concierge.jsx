import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/s/ssqcjdb5g.css';
import '../../css/q/qs2n5mb2y.css';
import '../../css/q/qucc97mxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG5ITFAoSF" x1="9" x2="15" y1="5" y2="21.48" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG5ITFAoSF)" class="ssqcjdb5g"/><path class="qs2n5mb2y wm-a"/><path class="qucc97mxb wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:bell-concierge"} {...others} />);
}

export default Component;
