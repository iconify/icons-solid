import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt0xhaboe.css';
import '../../css/d/d_rfajbtq.css';
import '../../css/y/yalo82bpm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rt0xhaboe"/><path class="d_rfajbtq"/><path class="yalo82bpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blackpushpin"} {...others} />);
}

export default Component;
