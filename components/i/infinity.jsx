import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqfskabkp.css';
import '../../css/i/i5ry0xbbo.css';
import '../../css/p/ppchx2lys.css';
import '../../css/v/vl5s227ll.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/g/g1_lf0b0l.css';
import '../../css/n/n3eif2zse.css';
import '../../css/i/ie1vi_kqw.css';
import '../../css/t/t1d5xgbys.css';
import '../../css/b/bite0hbcs.css';
import '../../css/x/xdaxvcbwy.css';
import '../../css/x/xwsbyowen.css';
import '../../css/i/iz6km987m.css';
import '../../css/e/efxtrobff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWaHMSu4y" x1="0" x2="0" y1="6.5" y2="16.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="mqfskabkp"/><stop offset=".42" class="i5ry0xbbo"/><stop offset=".56" class="ppchx2lys"/><stop offset=".78" class="vl5s227ll"/><stop offset="1" class="mqfskabkp"/></linearGradient><linearGradient id="SVGUBJgXdxd" x1="0" x2="0" y1="7" y2="16" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".24" class="i5ry0xbbo"/><stop offset=".5" class="ppchx2lys"/><stop offset="1" class="vl5s227ll"/></linearGradient><linearGradient id="SVGbVsRBeGT" x1="0" x2="0" y1="7" y2="16" gradientUnits="userSpaceOnUse"><stop offset=".56" class="g1_lf0b0l"/><stop offset=".84" class="vl5s227ll"/><stop offset="1" class="vc--wpv5i"/></linearGradient></defs><path class="n3eif2zse wm-shadow"/><path class="ie1vi_kqw"/><path fill="url(#SVGWaHMSu4y)" class="t1d5xgbys"/><path fill="url(#SVGUBJgXdxd)" class="bite0hbcs"/><path fill="url(#SVGbVsRBeGT)" class="xdaxvcbwy"/><path class="xwsbyowen"/><path class="iz6km987m wm-shine"/><path class="efxtrobff wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-chrome:infinity"} {...others} />);
}

export default Component;
