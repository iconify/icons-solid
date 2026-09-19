import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ex5fhlbnn.css';
import '../../css/s/sub5_qh_m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ex5fhlbnn"/><path class="sub5_qh_m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:wrench"} {...others} />);
}

export default Component;
