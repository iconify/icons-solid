import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/j8-e07bxq.css';
import '../../css/u/u6tax3bsf.css';
import '../../css/o/opx8pnlpu.css';
import '../../css/z/z4vss-3aa.css';
import '../../css/a/aa14j2yan.css';
import '../../css/f/fpzl24gqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGOvAaqoLE" x1="8.75" x2="14.75" y1="2.76" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="j8-e07bxq wm-s"/><path fill="url(#SVGOvAaqoLE)" class="u6tax3bsf"/><path class="opx8pnlpu wm-s"/><path class="wm-shine z4vss-3aa"/><path class="aa14j2yan wm-shine"/><path class="fpzl24gqa wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:user-plus"} {...others} />);
}

export default Component;
