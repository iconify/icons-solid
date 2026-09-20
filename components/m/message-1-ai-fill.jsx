import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4sz79b1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4sz79b1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:message-1-ai-fill"} {...others} />);
}

export default Component;
