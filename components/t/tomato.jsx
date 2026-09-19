import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rw_mb8bvf.css';
import '../../css/q/q2xx64f4s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="rw_mb8bvf"/><path class="q2xx64f4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tomato"} {...others} />);
}

export default Component;
