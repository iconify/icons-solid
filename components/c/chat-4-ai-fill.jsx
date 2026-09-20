import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub30ixkmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ub30ixkmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chat-4-ai-fill"} {...others} />);
}

export default Component;
