import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/p/p9--ovb7o.css';
import '../../css/s/sqpivhksc.css';
import '../../css/k/kivyvktmd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="p9--ovb7o"/><path clip-rule="evenodd" class="sqpivhksc"/><path class="kivyvktmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:monitor"} {...others} />);
}

export default Component;
