import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/u/unjapft1d.css';
import '../../css/o/otbjaccwy.css';
import '../../css/w/weq50yb3s.css';
import '../../css/d/du8z9lkzy.css';
import '../../css/r/r9zwupzza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGVGJiScbW" x1="9" x2="15" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGVGJiScbW)" class="unjapft1d"/><path class="otbjaccwy wm-a"/><path class="weq50yb3s wm-shine"/><path class="du8z9lkzy wm-shine"/><path class="r9zwupzza wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:tombstone"} {...others} />);
}

export default Component;
