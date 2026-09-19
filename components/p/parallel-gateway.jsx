import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/k60_42bvb.css';
import '../../css/e/epwsljzvl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="k60_42bvb"/><path class="epwsljzvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:parallel-gateway"} {...others} />);
}

export default Component;
