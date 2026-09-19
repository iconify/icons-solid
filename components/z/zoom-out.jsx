import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/h/h0ugno76y.css';
import '../../css/i/i0u2ubbtx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="h0ugno76y"/><path class="i0u2ubbtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:zoom-out"} {...others} />);
}

export default Component;
