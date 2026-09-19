import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/okpglsx8s.css';
import '../../css/q/qk1na-z7c.css';
import '../../css/h/hattev4qd.css';
import '../../css/h/h-h9dybld.css';
import '../../css/l/livu2sb8w.css';
import '../../css/m/m_wn69b_l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path clip-rule="evenodd" class="okpglsx8s"/><path class="qk1na-z7c"/><path class="hattev4qd"/><path class="h-h9dybld"/><path class="livu2sb8w"/><path class="m_wn69b_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:lifebuoy"} {...others} />);
}

export default Component;
