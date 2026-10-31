import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqfskabkp.css';
import '../../css/i/i5ry0xbbo.css';
import '../../css/p/ppchx2lys.css';
import '../../css/v/vl5s227ll.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/g/g1_lf0b0l.css';
import '../../css/j/j0rczrzeh.css';
import '../../css/h/hjkgd4jnv.css';
import '../../css/b/btip92bhs.css';
import '../../css/i/i3zvxfnsw.css';
import '../../css/r/r-d455bpv.css';
import '../../css/h/hjjq40x5y.css';
import '../../css/v/vgtgfdcax.css';
import '../../css/b/bd-7xiule.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQUIG9dWi" x1="0" x2="0" y1="4.1" y2="18.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="mqfskabkp"/><stop offset=".42" class="i5ry0xbbo"/><stop offset=".56" class="ppchx2lys"/><stop offset=".78" class="vl5s227ll"/><stop offset="1" class="mqfskabkp"/></linearGradient><linearGradient id="SVGXbhRpbhx" x1="0" x2="0" y1="4.6" y2="18.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".24" class="i5ry0xbbo"/><stop offset=".5" class="ppchx2lys"/><stop offset="1" class="vl5s227ll"/></linearGradient><linearGradient id="SVG9SytebaQ" x1="0" x2="0" y1="4.6" y2="18.4" gradientUnits="userSpaceOnUse"><stop offset=".56" class="g1_lf0b0l"/><stop offset=".84" class="vl5s227ll"/><stop offset="1" class="vc--wpv5i"/></linearGradient></defs><path class="j0rczrzeh wm-shadow"/><path class="hjkgd4jnv"/><path fill="url(#SVGQUIG9dWi)" class="btip92bhs"/><path fill="url(#SVGXbhRpbhx)" class="i3zvxfnsw"/><path fill="url(#SVG9SytebaQ)" class="r-d455bpv"/><path class="hjjq40x5y"/><path class="vgtgfdcax wm-shine"/><path class="bd-7xiule wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-chrome:gauge"} {...others} />);
}

export default Component;
