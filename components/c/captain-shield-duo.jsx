import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w5z9h1bev.css';
import '../../css/d/dst7cobom.css';
import '../../css/s/sytfk7bwm.css';
import '../../css/u/uazd6qbsh.css';
import '../../css/j/j_e04r4or.css';
import '../../css/f/f7lm3mb-h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="w5z9h1bev"/><path class="dst7cobom"/><path class="sytfk7bwm"/><path class="uazd6qbsh"/><path class="j_e04r4or"/><path class="f7lm3mb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:captain-shield-duo"} {...others} />);
}

export default Component;
