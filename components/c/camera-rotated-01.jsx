import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/ty-ii6zcj.css';
import '../../css/u/u0t7-ybxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ty-ii6zcj"/><path class="u0t7-ybxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:camera-rotated-01"} {...others} />);
}

export default Component;
