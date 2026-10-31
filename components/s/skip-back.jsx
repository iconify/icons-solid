import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/y/yeb_chb6l.css';
import '../../css/z/z6-8lnbgu.css';
import '../../css/q/qyspjy0yr.css';
import '../../css/g/g0it0obat.css';
import '../../css/a/a0jopkbsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGGp2Q0dBo" x1="9" x2="15" y1="4.01" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGGp2Q0dBo)" class="yeb_chb6l"/><path class="wm-a z6-8lnbgu"/><path class="qyspjy0yr wm-shine"/><path class="g0it0obat wm-shine"/><path class="a0jopkbsw wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:skip-back"} {...others} />);
}

export default Component;
