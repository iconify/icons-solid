import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/y/yj51oxb5o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><rect class="r8cyu3bwz"/><path class="yj51oxb5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:right-bar"} {...others} />);
}

export default Component;
