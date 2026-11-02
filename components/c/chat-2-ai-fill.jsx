import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctdfjcn_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ctdfjcn_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chat-2-ai-fill"} {...others} />);
}

export default Component;
