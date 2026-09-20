import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm_ste21z.css';
import '../../css/m/m7rzspbge.css';
import '../../css/c/c6rjz91lt.css';
import '../../css/j/jbbtftbrr.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGv5Xsmd0j" x1="256" x2="256" y1="14.331" y2="497.669" gradientUnits="userSpaceOnUse"><stop offset="0" class="gm_ste21z"/><stop offset="1" class="m7rzspbge"/></linearGradient><path fill="url(#SVGv5Xsmd0j)" class="c6rjz91lt"/><path class="jbbtftbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-word-2013"} {...others} />);
}

export default Component;
