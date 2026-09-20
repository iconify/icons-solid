import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxex4oboi.css';
import '../../css/i/i-lfmccxy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mxex4oboi"/><path class="i-lfmccxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:chat-locked-16"} {...others} />);
}

export default Component;
