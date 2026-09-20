import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/jhb1-yo2s.css';
import '../../css/a/ag_91ybtx.css';
import '../../css/q/q8vd6h-1c.css';
import '../../css/v/vsrzmhnfq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="jhb1-yo2s"/><path class="ag_91ybtx"/><path class="q8vd6h-1c"/><path class="vsrzmhnfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:chat-bubble-square-warning"} {...others} />);
}

export default Component;
