import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/t4w8d1bjd.css';
import '../../css/s/szazv7kbp.css';
import '../../css/d/db2_xcblj.css';
import '../../css/u/u3mv-l8yq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGSLbZ2R5R" x1="9" x2="15" y1="2.51" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGSLbZ2R5R)" class="t4w8d1bjd"/><path class="szazv7kbp wm-shine"/><path class="db2_xcblj wm-shine"/><path class="u3mv-l8yq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:user"} {...others} />);
}

export default Component;
