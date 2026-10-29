import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vts8luguz.css';
import '../../css/b/bdh_yppki.css';
import '../../css/o/oz0ms6lzn.css';
import '../../css/y/y0mzs245t.css';
import '../../css/m/mp3vtlqfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGmUD9Xcrj" x1="3" x2="12.69" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset=".3" class="vts8luguz"/><stop offset="1" class="bdh_yppki"/></linearGradient></defs><path class="oz0ms6lzn"/><path fill="url(#SVGmUD9Xcrj)" class="wm-shine y0mzs245t"/><path class="mp3vtlqfi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-christmas:contactless"} {...others} />);
}

export default Component;
