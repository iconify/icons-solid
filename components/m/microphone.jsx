import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kunmh0bwu.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="kunmh0bwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:microphone"} {...others} />);
}

export default Component;
