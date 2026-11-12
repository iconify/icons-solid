import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3grv615f.css';
import '../../css/p/pzzmlacch.css';
import '../../css/v/v_l-g_1an.css';
import '../../css/b/bkn4wid1p.css';
import '../../css/z/zghh1obdj.css';
import '../../css/m/m-xtlvcgd.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGfSgULd3G" x1="89.2" x2="795.7" y1="373" y2="-114.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="x3grv615f"/><stop offset="1" class="pzzmlacch"/></linearGradient><path fill="url(#SVGfSgULd3G)" class="v_l-g_1an"/><linearGradient id="SVGeLIVPc5P" x1="115.1" x2="910.9" y1="434.9" y2="-484.7" gradientUnits="userSpaceOnUse"><stop offset="0" class="bkn4wid1p"/><stop offset="1" class="zghh1obdj"/></linearGradient><path fill="url(#SVGeLIVPc5P)" class="m-xtlvcgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:librechat"} {...others} />);
}

export default Component;
