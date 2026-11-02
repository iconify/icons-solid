import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipjfvdb9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ipjfvdb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:message-3-ai-line"} {...others} />);
}

export default Component;
