import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/m/mmre0ys1c.css';
import '../../css/e/e_45-ab-z.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="mmre0ys1c"/><path class="e_45-ab-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:mini-player"} {...others} />);
}

export default Component;
