import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuf42lb8e.css';
import '../../css/h/h32s7pb1r.css';
import '../../css/k/kmg5mtb8s.css';
import '../../css/k/kxdfcnclp.css';
import '../../css/j/j14f6hbti.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="kuf42lb8e"><path class="h32s7pb1r"/><path class="kmg5mtb8s"/><path class="kxdfcnclp"/><path class="j14f6hbti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:helix"} {...others} />);
}

export default Component;
