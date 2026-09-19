import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u-jpu6bpu.css';
import '../../css/k/kbldvwb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u-jpu6bpu"/><path class="kbldvwb2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sofa-03"} {...others} />);
}

export default Component;
