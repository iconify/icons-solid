import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t2ouk1byg.css';
import '../../css/l/l0zoj3aiv.css';
import '../../css/p/p0b_9mvhd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="t2ouk1byg"/><path class="l0zoj3aiv"/><path class="p0b_9mvhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mushroom"} {...others} />);
}

export default Component;
