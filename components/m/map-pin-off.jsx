import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/w/wygbojjqg.css';
import '../../css/u/uh6di0wke.css';
import '../../css/y/ywln0facf.css';
import '../../css/g/gt80rxakr.css';
import '../../css/t/tcu29cbgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDgqDdcJK" x1="9" x2="15" y1="1.51" y2="22.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGDgqDdcJK)" class="wygbojjqg"/><path class="uh6di0wke wm-s"/><path class="wm-shine ywln0facf"/><path class="gt80rxakr wm-shine"/><path class="tcu29cbgc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:map-pin-off"} {...others} />);
}

export default Component;
