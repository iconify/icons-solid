import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/i/i0cnt4bxp.css';
import '../../css/e/ey--f3weg.css';
import '../../css/i/i87x1tr1t.css';
import '../../css/l/lmwpywdub.css';
import '../../css/k/k4x_376ml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGyVnficJd" x1="8.99" x2="14.99" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGyVnficJd)" class="i0cnt4bxp"/><path class="ey--f3weg wm-a"/><path class="i87x1tr1t wm-shine"/><path class="lmwpywdub wm-shine"/><path class="k4x_376ml wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:zoom-out"} {...others} />);
}

export default Component;
