import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/w/w8dd_zm0v.css';
import '../../css/p/p5w2crbbm.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="w8dd_zm0v"/><path class="p5w2crbbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:bell-snooze"} {...others} />);
}

export default Component;
