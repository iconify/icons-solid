import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4z-pxbao.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w4z-pxbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-bubble-reply-filled"} {...others} />);
}

export default Component;
