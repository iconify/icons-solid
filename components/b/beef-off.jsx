import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r-qd7_b_c.css';
import '../../css/f/f9iub6b_k.css';
import '../../css/h/hushrnb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r-qd7_b_c"/><path class="f9iub6b_k"/><path class="hushrnb6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:beef-off"} {...others} />);
}

export default Component;
