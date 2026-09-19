import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opl6_qb9p.css';
import '../../css/h/h6qog1b5o.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="opl6_qb9p"/><path class="h6qog1b5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ng"} {...others} />);
}

export default Component;
