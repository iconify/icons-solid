import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7cew6b7g.css';
import '../../css/d/dtgir6b5j.css';
import '../../css/p/p6lux86jr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse class="h7cew6b7g"/><path class="dtgir6b5j"/><path class="p6lux86jr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:degree-90"} {...others} />);
}

export default Component;
