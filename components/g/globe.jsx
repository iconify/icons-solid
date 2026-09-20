import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/g/g0u24lbal.css';
import '../../css/s/sbnchkbcc.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="g0u24lbal"/><path class="sbnchkbcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:globe"} {...others} />);
}

export default Component;
