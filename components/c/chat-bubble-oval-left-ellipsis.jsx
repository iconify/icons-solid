import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/inftcdmqk.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="inftcdmqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:chat-bubble-oval-left-ellipsis"} {...others} />);
}

export default Component;
