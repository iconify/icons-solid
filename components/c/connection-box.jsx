import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xw4eal6vv.css';
import '../../css/q/qd07iqr1b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="xw4eal6vv"/><path class="qd07iqr1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:connection-box"} {...others} />);
}

export default Component;
