import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/r/ryqbpubao.css';
import '../../css/p/p5nn452su.css';
import '../../css/m/m3ymzjbtw.css';
import '../../css/u/ub4brsbnn.css';
import '../../css/g/g0ciq27ms.css';
import '../../css/e/evq511ofg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBP8eceNz" x1="9" x2="15" y1="1.52" y2="22.15" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="ryqbpubao wm-s"/><path fill="url(#SVGBP8eceNz)" class="p5nn452su"/><path class="m3ymzjbtw wm-s"/><path class="ub4brsbnn wm-shine"/><path class="g0ciq27ms wm-shine"/><path class="evq511ofg wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:package-plus"} {...others} />);
}

export default Component;
