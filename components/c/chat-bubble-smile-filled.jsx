import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8yxhvbzm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i8yxhvbzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chat-bubble-smile-filled"} {...others} />);
}

export default Component;
