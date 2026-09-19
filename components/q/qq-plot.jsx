import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lb7nvhz5k.css';
import '../../css/e/e2wyyjb0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lb7nvhz5k"/><path class="e2wyyjb0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:qq-plot"} {...others} />);
}

export default Component;
