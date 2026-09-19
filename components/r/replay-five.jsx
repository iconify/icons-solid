import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/x98xowbiu.css';
import '../../css/o/omor4un3n.css';
import '../../css/k/k1zvmcc1p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="x98xowbiu"/><path class="omor4un3n"/><path class="k1zvmcc1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:replay-five"} {...others} />);
}

export default Component;
