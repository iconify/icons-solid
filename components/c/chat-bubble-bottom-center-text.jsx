import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-kp13e4i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-kp13e4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chat-bubble-bottom-center-text"} {...others} />);
}

export default Component;
