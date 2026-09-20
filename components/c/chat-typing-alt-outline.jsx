import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw9fzjpvh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bw9fzjpvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:chat-typing-alt-outline"} {...others} />);
}

export default Component;
