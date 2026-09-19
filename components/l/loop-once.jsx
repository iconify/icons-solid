import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kog7s4brn.css';
import '../../css/u/u79z_ybyy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="kog7s4brn"/><path class="u79z_ybyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:loop-once"} {...others} />);
}

export default Component;
