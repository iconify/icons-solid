import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/e_etmcbsc.css';
import '../../css/m/mrxph1b2l.css';
import '../../css/b/bpn2whb-f.css';
import '../../css/y/yffpr4bgm.css';
import '../../css/q/q8n5gmb6q.css';
import '../../css/u/uzw04cb0k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="e_etmcbsc"/><path class="mrxph1b2l"/><path class="bpn2whb-f"/><path class="yffpr4bgm"/><path class="q8n5gmb6q"/><path class="uzw04cb0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ladder"} {...others} />);
}

export default Component;
