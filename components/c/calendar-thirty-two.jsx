import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/h/hk0u6n4pq.css';
import '../../css/z/zt8glxhsg.css';
import '../../css/l/lpo9v9cnc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="hk0u6n4pq"/><path clip-rule="evenodd" class="zt8glxhsg"/><path class="lpo9v9cnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:calendar-thirty-two"} {...others} />);
}

export default Component;
