import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqfskabkp.css';
import '../../css/i/i5ry0xbbo.css';
import '../../css/p/ppchx2lys.css';
import '../../css/v/vl5s227ll.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/g/g1_lf0b0l.css';
import '../../css/e/e8f4qnjff.css';
import '../../css/j/j6go85bvd.css';
import '../../css/f/f_mcdmbrj.css';
import '../../css/r/ri9lk6_dw.css';
import '../../css/v/vren-kzxv.css';
import '../../css/b/bily_ub8o.css';
import '../../css/w/wzkioebwf.css';
import '../../css/f/fpc4a9bhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBdjlCcBM" x1="0" x2="0" y1="2.7" y2="20.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="mqfskabkp"/><stop offset=".42" class="i5ry0xbbo"/><stop offset=".56" class="ppchx2lys"/><stop offset=".78" class="vl5s227ll"/><stop offset="1" class="mqfskabkp"/></linearGradient><linearGradient id="SVGldohgQEi" x1="0" x2="0" y1="3.2" y2="20.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".24" class="i5ry0xbbo"/><stop offset=".5" class="ppchx2lys"/><stop offset="1" class="vl5s227ll"/></linearGradient><linearGradient id="SVGgJz0nbbo" x1="0" x2="0" y1="3.2" y2="20.2" gradientUnits="userSpaceOnUse"><stop offset=".56" class="g1_lf0b0l"/><stop offset=".84" class="vl5s227ll"/><stop offset="1" class="vc--wpv5i"/></linearGradient></defs><path class="e8f4qnjff wm-shadow"/><path class="j6go85bvd"/><path fill="url(#SVGBdjlCcBM)" class="f_mcdmbrj"/><path fill="url(#SVGldohgQEi)" class="ri9lk6_dw"/><path fill="url(#SVGgJz0nbbo)" class="vren-kzxv"/><path class="bily_ub8o"/><path class="wm-shine wzkioebwf"/><path class="fpc4a9bhg wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-chrome:message-square-code"} {...others} />);
}

export default Component;
