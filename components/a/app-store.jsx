import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hf38611nk.css';
import '../../css/z/zzxpkyxfn.css';
import '../../css/w/w6tuuh_hi.css';
import '../../css/h/hncib8b1o.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGwIXbaeAs" x1="-473.572" x2="-473.572" y1="-11.482" y2="-10.482" gradientTransform="matrix(512 0 0 512 242725 5878)" gradientUnits="userSpaceOnUse"><stop offset="0" class="hf38611nk"/><stop offset="1" class="zzxpkyxfn"/></linearGradient><path fill="url(#SVGwIXbaeAs)" class="w6tuuh_hi"/><path class="hncib8b1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:app-store"} {...others} />);
}

export default Component;
