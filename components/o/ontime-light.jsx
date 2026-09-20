import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ra7z8eb0k.css';
import '../../css/j/j_3_1xjnx.css';
import '../../css/m/mno0o_bwq.css';
import '../../css/b/bmqf4y-5r.css';
import '../../css/g/ge8snfgdk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ra7z8eb0k"/><path class="j_3_1xjnx"/><linearGradient id="SVGPOCrKcoz" x1="-20.434" x2="453.204" y1="80.221" y2="553.859" gradientUnits="userSpaceOnUse"><stop offset="0" class="mno0o_bwq"/><stop offset="1" class="bmqf4y-5r"/></linearGradient><path fill="url(#SVGPOCrKcoz)" class="ge8snfgdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ontime-light"} {...others} />);
}

export default Component;
