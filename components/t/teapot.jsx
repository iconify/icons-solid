import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/m/mdqyrl6cs.css';
import '../../css/l/le2tq8b_y.css';
import '../../css/r/rqbs-1gls.css';
import '../../css/s/shwmzymiw.css';
import '../../css/b/bgzo4dknf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGgncWkbIX" x1="9.02" x2="15.02" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="mdqyrl6cs wm-s"/><path fill="url(#SVGgncWkbIX)" class="le2tq8b_y"/><path class="rqbs-1gls wm-a"/><path class="shwmzymiw wm-s"/><path class="bgzo4dknf wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:teapot"} {...others} />);
}

export default Component;
