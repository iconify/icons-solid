import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjz2s1uvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wjz2s1uvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:message-1-ai-line"} {...others} />);
}

export default Component;
