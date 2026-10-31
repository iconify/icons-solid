import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqfskabkp.css';
import '../../css/i/i5ry0xbbo.css';
import '../../css/p/ppchx2lys.css';
import '../../css/v/vl5s227ll.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/g/g1_lf0b0l.css';
import '../../css/n/n4lxq5bwh.css';
import '../../css/e/exj8kulyo.css';
import '../../css/n/nywmvjbao.css';
import '../../css/c/copnjob7t.css';
import '../../css/s/swq2ambat.css';
import '../../css/n/na0tzs25v.css';
import '../../css/b/btdmnxglj.css';
import '../../css/l/l87kqsuyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGdmVH4b3R" x1="0" x2="0" y1="4.5" y2="19.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="mqfskabkp"/><stop offset=".42" class="i5ry0xbbo"/><stop offset=".56" class="ppchx2lys"/><stop offset=".78" class="vl5s227ll"/><stop offset="1" class="mqfskabkp"/></linearGradient><linearGradient id="SVGIPbRPnYL" x1="0" x2="0" y1="5" y2="18.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".24" class="i5ry0xbbo"/><stop offset=".5" class="ppchx2lys"/><stop offset="1" class="vl5s227ll"/></linearGradient><linearGradient id="SVGaYkTgdaQ" x1="0" x2="0" y1="5" y2="18.9" gradientUnits="userSpaceOnUse"><stop offset=".56" class="g1_lf0b0l"/><stop offset=".84" class="vl5s227ll"/><stop offset="1" class="vc--wpv5i"/></linearGradient></defs><path class="n4lxq5bwh wm-shadow"/><path class="exj8kulyo"/><path fill="url(#SVGdmVH4b3R)" class="nywmvjbao"/><path fill="url(#SVGIPbRPnYL)" class="copnjob7t"/><path fill="url(#SVGaYkTgdaQ)" class="swq2ambat"/><path class="na0tzs25v"/><path class="btdmnxglj wm-shine"/><path class="l87kqsuyx wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-chrome:gamepad"} {...others} />);
}

export default Component;
