import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2veihb8k.css';
import '../../css/o/oddkodjqw.css';
import '../../css/s/s43ffc4qp.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="j2veihb8k"/><path class="oddkodjqw"/><path class="s43ffc4qp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ro"} {...others} />);
}

export default Component;
