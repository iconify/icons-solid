import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfc305asn.css';
import '../../css/y/yyp3kacgv.css';
import '../../css/i/iycln-b8i.css';
import '../../css/b/bt5216xcz.css';
import '../../css/v/v_wl77bax.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGhTSIPRWX" x1="507.3" x2="89.7" y1="-16.7" y2="436.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="zfc305asn"/><stop offset="1" class="yyp3kacgv"/></linearGradient><circle fill="url(#SVGhTSIPRWX)" class="iycln-b8i"/><path class="bt5216xcz"/><path class="v_wl77bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bracket"} {...others} />);
}

export default Component;
