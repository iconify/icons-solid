import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vp_8_1bnl.css';
import '../../css/h/h8_z3jbvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vp_8_1bnl"/><path class="h8_z3jbvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:parking-meter"} {...others} />);
}

export default Component;
