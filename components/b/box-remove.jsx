import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/d/d_ghb5b3j.css';
import '../../css/u/uge9pi2qj.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="d_ghb5b3j"/><path class="uge9pi2qj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:box-remove"} {...others} />);
}

export default Component;
