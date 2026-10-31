import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/j/jvvg8mbwr.css';
import '../../css/x/xes4ntb1t.css';
import '../../css/c/ciawucboq.css';
import '../../css/q/q54_dqgic.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="jvvg8mbwr"/><path class="xes4ntb1t"/><path class="ciawucboq"/><path class="q54_dqgic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:smartphone-rotate-pop"} {...others} />);
}

export default Component;
