import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lxl-9zgub.css';
import '../../css/j/j4e641bye.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="lxl-9zgub"/><path class="j4e641bye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:chart-graph"} {...others} />);
}

export default Component;
