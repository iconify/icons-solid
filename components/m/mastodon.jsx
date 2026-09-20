import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggxvnybxb.css';
import '../../css/t/twcexwbvp.css';
import '../../css/f/fdfttbm9b.css';
import '../../css/y/yw-sn55so.css';

const viewBox = {"width":61,"height":65};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVG2wvHBcLd)" class="ggxvnybxb"/><path class="twcexwbvp"/><defs><linearGradient id="SVG2wvHBcLd" x1="30.5" x2="30.5" y1="0" y2="65" gradientUnits="userSpaceOnUse"><stop class="fdfttbm9b"/><stop offset="1" class="yw-sn55so"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mastodon"} {...others} />);
}

export default Component;
