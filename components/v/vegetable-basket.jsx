import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nfw4zi50g.css';
import '../../css/y/ymg6es-yl.css';
import '../../css/d/dtj_aspgi.css';
import '../../css/q/qigferbpk.css';
import '../../css/d/db2k2tb3h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="nfw4zi50g"/><path class="ymg6es-yl"/><path class="dtj_aspgi"/><path class="qigferbpk"/><path class="db2k2tb3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vegetable-basket"} {...others} />);
}

export default Component;
