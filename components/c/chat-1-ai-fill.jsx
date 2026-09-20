import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-ch-u9hc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u-ch-u9hc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chat-1-ai-fill"} {...others} />);
}

export default Component;
