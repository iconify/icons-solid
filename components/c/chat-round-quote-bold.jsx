import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gb-723yon.css';
import '../../css/q/q4oz3o56q.css';
import '../../css/b/b0egytfya.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gb-723yon"/><path class="q4oz3o56q"/><path clip-rule="evenodd" class="b0egytfya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-quote-bold"} {...others} />);
}

export default Component;
