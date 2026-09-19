import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q_m2gy00p.css';
import '../../css/o/okqyo3pdi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q_m2gy00p"/><path class="okqyo3pdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:redo-03"} {...others} />);
}

export default Component;
