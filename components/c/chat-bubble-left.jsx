import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofpgi6bvf.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="ofpgi6bvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:chat-bubble-left"} {...others} />);
}

export default Component;
