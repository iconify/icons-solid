import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sc5634b_z.css';
import '../../css/v/vti1t7j4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sc5634b_z"/><path class="vti1t7j4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:developer"} {...others} />);
}

export default Component;
