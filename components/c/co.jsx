import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8zaymbeq.css';
import '../../css/n/n40e-wbrj.css';
import '../../css/f/feaf--bdz.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="y8zaymbeq"/><path class="n40e-wbrj"/><path class="feaf--bdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:co"} {...others} />);
}

export default Component;
