import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/k/ktzxsdbyc.css';
import '../../css/q/q40c2rczh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="ktzxsdbyc"/><path class="q40c2rczh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:chat-bubble-oval-notification"} {...others} />);
}

export default Component;
