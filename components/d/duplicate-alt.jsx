import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/n/n0s9nrifx.css';
import '../../css/h/h-s8-ebfv.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="n0s9nrifx"/><path class="h-s8-ebfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:duplicate-alt"} {...others} />);
}

export default Component;
