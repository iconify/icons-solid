import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdygiiwqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cdygiiwqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:chat-bubble-bottom-center-text"} {...others} />);
}

export default Component;
