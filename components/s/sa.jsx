import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7nq8oi5h.css';
import '../../css/e/e4o1ae02c.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="l7nq8oi5h"/><path class="e4o1ae02c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sa"} {...others} />);
}

export default Component;
