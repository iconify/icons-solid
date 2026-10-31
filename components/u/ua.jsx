import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0v0id9pz.css';
import '../../css/y/y_ekn01od.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="k0v0id9pz"/><path class="y_ekn01od"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ua"} {...others} />);
}

export default Component;
