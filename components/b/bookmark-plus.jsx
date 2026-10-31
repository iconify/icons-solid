import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/h/hwvq72bhk.css';
import '../../css/f/fug_1nb3z.css';
import '../../css/f/fjd6fm4pa.css';
import '../../css/x/x15v0i_co.css';
import '../../css/w/w80y60brr.css';
import '../../css/v/v6emz2bhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGehgD7cFN" x1="9" x2="15" y1="2" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGehgD7cFN)" class="hwvq72bhk"/><path class="fug_1nb3z wm-shine"/><path class="fjd6fm4pa wm-shine"/><path class="wm-shine x15v0i_co"/><path class="w80y60brr wm-shine"/><path class="v6emz2bhi wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:bookmark-plus"} {...others} />);
}

export default Component;
