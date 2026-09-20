import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/n/nw4uyc1fv.css';
import '../../css/u/uge9pi2qj.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="nw4uyc1fv"/><path class="uge9pi2qj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:box"} {...others} />);
}

export default Component;
