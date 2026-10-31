import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/zazlwkbss.css';
import '../../css/b/bphc3jb3o.css';
import '../../css/h/ho6kkgbgx.css';
import '../../css/u/ur_qt99qc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGt5JV9xvQ" x1="8.76" x2="14.76" y1="2.51" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGt5JV9xvQ)" class="zazlwkbss"/><path class="bphc3jb3o wm-shine"/><path class="ho6kkgbgx wm-shine"/><path class="ur_qt99qc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:leaf"} {...others} />);
}

export default Component;
