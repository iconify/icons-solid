import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf6uh2ajn.css';
import '../../css/r/rco1lvblh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yf6uh2ajn"/><path class="rco1lvblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chat-2-ai-line"} {...others} />);
}

export default Component;
