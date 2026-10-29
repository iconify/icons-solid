import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vts8luguz.css';
import '../../css/b/bdh_yppki.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/ackqa5buo.css';
import '../../css/t/t3z346bsu.css';
import '../../css/z/zd817b02j.css';
import '../../css/w/waqfgl3re.css';
import '../../css/b/bj_25b3xh.css';
import '../../css/m/mp3vtlqfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGkURqucgA" x1="5" x2="12.7" y1="5.03" y2="19" gradientUnits="userSpaceOnUse"><stop offset=".3" class="vts8luguz"/><stop offset="1" class="bdh_yppki"/></linearGradient><linearGradient id="SVGaJtOkb1N" x1="0" x2="0" y1="4.01" y2="11.28" gradientUnits="userSpaceOnUse"><stop offset=".25" class="vc--wpv5i"/><stop offset="1" class="ackqa5buo"/></linearGradient></defs><path class="t3z346bsu"/><path fill="url(#SVGkURqucgA)" class="wm-shine zd817b02j"/><path class="waqfgl3re wm-deco"/><path fill="url(#SVGaJtOkb1N)" class="bj_25b3xh wm-deco"/><path class="mp3vtlqfi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-christmas:chevrons-right"} {...others} />);
}

export default Component;
