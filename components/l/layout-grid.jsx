import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/k/kk4_84bal.css';
import '../../css/l/lm_8g3ohs.css';
import '../../css/t/t35e9katm.css';
import '../../css/u/uf2203bdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGvyQ5ZdHo" x1="8.99" x2="14.99" y1="2" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGvyQ5ZdHo)" class="kk4_84bal"/><path class="lm_8g3ohs wm-shine"/><path class="t35e9katm wm-shine"/><path class="uf2203bdl wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:layout-grid"} {...others} />);
}

export default Component;
