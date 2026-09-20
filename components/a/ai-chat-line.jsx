import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/j/jn2e1oaba.css';
import '../../css/l/lhkps1b5o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="jn2e1oaba"/><path class="lhkps1b5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-chat-line"} {...others} />);
}

export default Component;
