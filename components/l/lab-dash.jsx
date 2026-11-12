import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je4206bpc.css';
import '../../css/i/idop4_bfq.css';
import '../../css/n/n6p3t0bwu.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVG3goxwxyW" x1="442.6" x2="92.3" y1="522.5" y2="172.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="je4206bpc"/><stop offset="1" class="idop4_bfq"/></linearGradient><path fill="url(#SVG3goxwxyW)" class="n6p3t0bwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lab-dash"} {...others} />);
}

export default Component;
