import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fj_9mrpio.css';
import '../../css/t/te90vbbqs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fj_9mrpio"/><path class="te90vbbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:music-microphone-2"} {...others} />);
}

export default Component;
