import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rmjy0cbgc.css';
import '../../css/w/wujqs2ipr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="rmjy0cbgc"/><path class="wujqs2ipr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:snacks"} {...others} />);
}

export default Component;
