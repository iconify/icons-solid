import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/f/fzhm2e46h.css';
import '../../css/d/d-w453bpj.css';
import '../../css/y/ywj99bqtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGpSkUIbew" x1="9" x2="15" y1="5" y2="19" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGpSkUIbew)" class="fzhm2e46h"/><path class="d-w453bpj wm-a"/><path class="wm-shine ywj99bqtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:gold-ingot"} {...others} />);
}

export default Component;
