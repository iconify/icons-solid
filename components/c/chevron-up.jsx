import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/d/df2c37_nz.css';
import '../../css/b/brqqsqb4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGIRxsnedO" x1="4.9" x2="19.1" y1="7.9" y2="16.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="df2c37_nz wm-k"/><path fill="url(#SVGIRxsnedO)" class="brqqsqb4w wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-suite:chevron-up"} {...others} />);
}

export default Component;
