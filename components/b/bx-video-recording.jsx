import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xalk1bbvn.css';
import '../../css/r/r0ke4kbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xalk1bbvn"/><path class="r0ke4kbpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-video-recording"} {...others} />);
}

export default Component;
