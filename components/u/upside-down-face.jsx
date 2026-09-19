import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/oi5aypbxi.css';
import '../../css/t/to1q24v3e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="oi5aypbxi"/><path class="to1q24v3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:upside-down-face"} {...others} />);
}

export default Component;
