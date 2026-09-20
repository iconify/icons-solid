import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/f2a5kofpk.css';
import '../../css/h/hnwief6-h.css';
import '../../css/m/my7aiubwm.css';
import '../../css/d/dg7n-8n_h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="f2a5kofpk"/><path class="hnwief6-h"/><path class="my7aiubwm"/><path class="dg7n-8n_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:sail-ship"} {...others} />);
}

export default Component;
