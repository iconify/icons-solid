import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/m16glkxml.css';
import '../../css/o/orqht4b7r.css';
import '../../css/j/jdajip6yp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="m16glkxml"/><path class="orqht4b7r"/><path class="jdajip6yp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:archers-bow"} {...others} />);
}

export default Component;
