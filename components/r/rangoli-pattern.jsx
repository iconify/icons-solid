import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/t/tdlk6fcyl.css';
import '../../css/g/gp6ayrroc.css';
import '../../css/k/kugliybdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGHKhIpe7e" x1="9" x2="15" y1="1" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGHKhIpe7e)" class="tdlk6fcyl"/><path class="gp6ayrroc wm-a"/><path class="kugliybdi wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:rangoli-pattern"} {...others} />);
}

export default Component;
