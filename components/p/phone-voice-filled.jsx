import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yimxbdbkz.css';
import '../../css/i/i-nbabcvb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yimxbdbkz"/><path class="i-nbabcvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:phone-voice-filled"} {...others} />);
}

export default Component;
