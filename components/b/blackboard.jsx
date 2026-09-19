import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/d/d64vcpb0m.css';
import '../../css/s/swzcsov6m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="d64vcpb0m"/><path class="swzcsov6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:blackboard"} {...others} />);
}

export default Component;
