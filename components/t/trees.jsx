import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/n/na3l3cray.css';
import '../../css/k/kczzfpdkt.css';
import '../../css/f/fng_15btt.css';
import '../../css/n/n1csnztwg.css';
import '../../css/c/cadt80lvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdSVONocx" x1="9" x2="15" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGdSVONocx)" class="na3l3cray"/><path class="kczzfpdkt wm-a"/><path class="fng_15btt wm-shine"/><path class="n1csnztwg wm-shine"/><path class="cadt80lvq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:trees"} {...others} />);
}

export default Component;
