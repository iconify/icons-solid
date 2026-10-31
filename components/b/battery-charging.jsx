import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/du2o1sb8n.css';
import '../../css/q/q_prn0-rg.css';
import '../../css/j/j8jz6cbww.css';
import '../../css/k/kc2evqato.css';
import '../../css/u/uuicon3gn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="du2o1sb8n wm-shadow"/><path class="q_prn0-rg wm-shadow"/><path class="j8jz6cbww"/><path class="kc2evqato"/><path class="uuicon3gn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:battery-charging"} {...others} />);
}

export default Component;
