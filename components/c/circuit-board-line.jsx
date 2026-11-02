import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbt7j-2sg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lbt7j-2sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:circuit-board-line"} {...others} />);
}

export default Component;
