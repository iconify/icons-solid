import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcsb5qxsh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fcsb5qxsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-question-mark-bold"} {...others} />);
}

export default Component;
