import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g_12-kblq.css';
import '../../css/i/idr4sablm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="g_12-kblq"/><path class="idr4sablm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chart-line"} {...others} />);
}

export default Component;
