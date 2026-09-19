import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucu-4jbxj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ucu-4jbxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:chat-bubble-xmark-solid"} {...others} />);
}

export default Component;
