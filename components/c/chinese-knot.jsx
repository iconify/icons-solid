import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/jmasxxboh.css';
import '../../css/m/mowr9z_pj.css';
import '../../css/z/zbaevlqzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVG5njwT2TR" x1="8.99" x2="14.99" y1="1.52" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG5njwT2TR)" class="jmasxxboh"/><path class="mowr9z_pj wm-a"/><path class="wm-shine zbaevlqzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:chinese-knot"} {...others} />);
}

export default Component;
