import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zd731db9w.css';
import '../../css/a/afa550bhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zd731db9w"/><path class="afa550bhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:poly-tank"} {...others} />);
}

export default Component;
