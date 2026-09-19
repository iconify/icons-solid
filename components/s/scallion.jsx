import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dhh_pyb0c.css';
import '../../css/t/tu9wnccea.css';
import '../../css/f/fnwqy9rpp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dhh_pyb0c"/><path class="tu9wnccea"/><path class="fnwqy9rpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:scallion"} {...others} />);
}

export default Component;
