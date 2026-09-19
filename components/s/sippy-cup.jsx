import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r_iytjz3o.css';
import '../../css/n/nht52vbew.css';
import '../../css/f/fqarnac2p.css';
import '../../css/v/v164g4csy.css';
import '../../css/h/hxuvaacgr.css';
import '../../css/e/ekf4jgb4y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="r_iytjz3o"/><path class="nht52vbew"/><path class="fqarnac2p"/><path class="v164g4csy"/><path class="hxuvaacgr"/><path class="ekf4jgb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sippy-cup"} {...others} />);
}

export default Component;
