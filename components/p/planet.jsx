import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kubqaqb-n.css';
import '../../css/v/van1pxdhn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="kubqaqb-n"/><path class="van1pxdhn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:planet"} {...others} />);
}

export default Component;
