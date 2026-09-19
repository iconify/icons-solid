import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-6i1tp1u.css';
import '../../css/i/i0gqwhbgn.css';
import '../../css/o/obbq0pb6c.css';

const viewBox = {"width":301,"height":205};
const content = `<g class="ft5dv1b6b"><path class="o-6i1tp1u"/><path class="i0gqwhbgn"/><path class="obbq0pb6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:bo"} {...others} />);
}

export default Component;
