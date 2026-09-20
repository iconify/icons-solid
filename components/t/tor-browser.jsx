import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jmuu1l9wg.css';
import '../../css/e/euezyny1x.css';
import '../../css/s/sci2_fjrw.css';
import '../../css/h/h3z8tdbdf.css';
import '../../css/w/w98v3hbro.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="jmuu1l9wg"/><linearGradient id="SVGfiG6OUkY" x1="-701.127" x2="-701.127" y1="795.447" y2="796.447" gradientTransform="matrix(512 0 0 -512 359233 407781)" gradientUnits="userSpaceOnUse"><stop offset="0" class="euezyny1x"/><stop offset="1" class="sci2_fjrw"/></linearGradient><path fill="url(#SVGfiG6OUkY)" class="h3z8tdbdf"/><linearGradient id="SVGpTXgDbiO" x1="-705.543" x2="-705.543" y1="795.385" y2="796.385" gradientTransform="matrix(-231 0 0 -460 -162840 366366)" gradientUnits="userSpaceOnUse"><stop offset="0" class="euezyny1x"/><stop offset="1" class="sci2_fjrw"/></linearGradient><path fill="url(#SVGpTXgDbiO)" class="w98v3hbro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tor-browser"} {...others} />);
}

export default Component;
