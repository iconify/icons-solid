import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zj8pbgbmd.css';
import '../../css/m/mbpykcc7s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zj8pbgbmd"/><path class="mbpykcc7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:corner-left-up"} {...others} />);
}

export default Component;
