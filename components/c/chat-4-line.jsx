import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khi6rrb3k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="khi6rrb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chat-4-line"} {...others} />);
}

export default Component;
