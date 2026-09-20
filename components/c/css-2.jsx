import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fy653dc7v.css';
import '../../css/w/w4-h_7blu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fy653dc7v"/><path class="w4-h_7blu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:css-2"} {...others} />);
}

export default Component;
