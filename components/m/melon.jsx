import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3s0_eb_b.css';
import '../../css/w/waaci6bhq.css';
import '../../css/z/z9idlac5c.css';
import '../../css/y/y7wysxb7v.css';
import '../../css/u/uvi-asboq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j3s0_eb_b"/><path class="waaci6bhq"/><path class="z9idlac5c"/><path class="y7wysxb7v"/><path class="uvi-asboq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:melon"} {...others} />);
}

export default Component;
