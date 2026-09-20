import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/h/h84eq5xdd.css';
import '../../css/w/wr0z25bcm.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="h84eq5xdd"/><path class="wr0z25bcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:scale"} {...others} />);
}

export default Component;
