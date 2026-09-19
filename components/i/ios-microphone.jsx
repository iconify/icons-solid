import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm6g_lhrv.css';
import '../../css/d/dgu1br39e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nm6g_lhrv"/><path class="dgu1br39e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-microphone"} {...others} />);
}

export default Component;
