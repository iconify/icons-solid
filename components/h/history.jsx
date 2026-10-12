import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfqgbtbno.css';
import '../../css/f/f2-fiaccp.css';
import '../../css/h/h9bmykb9r.css';
import '../../css/i/ieuexu7ao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="yfqgbtbno"/><path class="f2-fiaccp"/><path class="h9bmykb9r"/><path class="ieuexu7ao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:history"} {...others} />);
}

export default Component;
