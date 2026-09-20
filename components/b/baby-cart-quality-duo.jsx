import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/piqghlb6x.css';
import '../../css/l/le843mwrq.css';
import '../../css/v/vo_j4ubnn.css';
import '../../css/o/omcygzbxz.css';
import '../../css/d/dffpntbuj.css';
import '../../css/x/xixp8ubcv.css';
import '../../css/x/xjf3tgacm.css';
import '../../css/e/e2wdrabkr.css';
import '../../css/q/q2y6tubhl.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="piqghlb6x"><path class="le843mwrq"/><path class="vo_j4ubnn"/><path class="omcygzbxz"/><path class="dffpntbuj"/><path class="xixp8ubcv"/><path class="xjf3tgacm"/><path class="e2wdrabkr"/><path class="q2y6tubhl"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:baby-cart-quality-duo"} {...others} />);
}

export default Component;
