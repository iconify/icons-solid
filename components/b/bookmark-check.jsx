import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/cueny_brl.css';
import '../../css/j/j_h1zbi-e.css';
import '../../css/r/r2ehb4bqr.css';
import '../../css/j/j2h0k_bqy.css';
import '../../css/t/twmxs-bmi.css';
import '../../css/w/wuoyrzbgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGehgD7cFN" x1="9" x2="15" y1="2" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGehgD7cFN)" class="cueny_brl"/><path class="j_h1zbi-e wm-shine"/><path class="r2ehb4bqr wm-shine"/><path class="j2h0k_bqy wm-shine"/><path class="twmxs-bmi wm-shine"/><path class="wm-shine wuoyrzbgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:bookmark-check"} {...others} />);
}

export default Component;
