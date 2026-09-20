import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkqhgpe2h.css';
import '../../css/w/wz00z2k7d.css';
import '../../css/i/iycln-b8i.css';
import '../../css/x/xveap1bta.css';
import '../../css/n/nooc1-b8a.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGZVEzHbdW" x1="-701.035" x2="-701.035" y1="796.444" y2="795.377" gradientTransform="matrix(480 0 0 -480 336753 382293)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qkqhgpe2h"/><stop offset="1" class="wz00z2k7d"/></linearGradient><circle fill="url(#SVGZVEzHbdW)" class="iycln-b8i"/><path class="xveap1bta"/><path class="nooc1-b8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:priceghost"} {...others} />);
}

export default Component;
