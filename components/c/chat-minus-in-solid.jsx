import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qid4wwbnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qid4wwbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:chat-minus-in-solid"} {...others} />);
}

export default Component;
