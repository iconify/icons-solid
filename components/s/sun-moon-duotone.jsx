import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mfs8q8gqb.css';
import '../../css/t/t0g5d7bgq.css';
import '../../css/m/ms4raqipz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mfs8q8gqb"/><path class="t0g5d7bgq"/><path class="ms4raqipz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sun-moon-duotone"} {...others} />);
}

export default Component;
