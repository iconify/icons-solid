import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqfskabkp.css';
import '../../css/i/i5ry0xbbo.css';
import '../../css/p/ppchx2lys.css';
import '../../css/v/vl5s227ll.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/g/g1_lf0b0l.css';
import '../../css/g/g_v81bbao.css';
import '../../css/t/t8q_4qz3r.css';
import '../../css/y/yz278nbnw.css';
import '../../css/u/ugmkgabrl.css';
import '../../css/r/r59r1bb1u.css';
import '../../css/f/f2i_crbqf.css';
import '../../css/s/sca5rmlmn.css';
import '../../css/i/itpa0ebna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGXOct0m3G" x1="0" x2="0" y1="2.3" y2="20.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="mqfskabkp"/><stop offset=".42" class="i5ry0xbbo"/><stop offset=".56" class="ppchx2lys"/><stop offset=".78" class="vl5s227ll"/><stop offset="1" class="mqfskabkp"/></linearGradient><linearGradient id="SVGbaEfPxwR" x1="0" x2="0" y1="2.8" y2="20.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".24" class="i5ry0xbbo"/><stop offset=".5" class="ppchx2lys"/><stop offset="1" class="vl5s227ll"/></linearGradient><linearGradient id="SVGmlYxf3tx" x1="0" x2="0" y1="2.8" y2="20.2" gradientUnits="userSpaceOnUse"><stop offset=".56" class="g1_lf0b0l"/><stop offset=".84" class="vl5s227ll"/><stop offset="1" class="vc--wpv5i"/></linearGradient></defs><path class="g_v81bbao wm-shadow"/><path class="t8q_4qz3r"/><path fill="url(#SVGXOct0m3G)" class="yz278nbnw"/><path fill="url(#SVGbaEfPxwR)" class="ugmkgabrl"/><path fill="url(#SVGmlYxf3tx)" class="r59r1bb1u"/><path class="f2i_crbqf"/><path class="sca5rmlmn wm-shine"/><path class="itpa0ebna wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-chrome:vault"} {...others} />);
}

export default Component;
