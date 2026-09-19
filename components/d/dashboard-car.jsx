import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/el44v1bwo.css';
import '../../css/q/qpxvacb1j.css';
import '../../css/o/o0ce453zk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="el44v1bwo"/><path class="qpxvacb1j"/><path clip-rule="evenodd" class="o0ce453zk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dashboard-car"} {...others} />);
}

export default Component;
