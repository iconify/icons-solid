import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/reok9ub7k.css';
import '../../css/d/d2f_x3x6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="reok9ub7k"/><path class="d2f_x3x6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:task-remove-02"} {...others} />);
}

export default Component;
