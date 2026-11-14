import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/ginckrb5s.css';
import '../../css/o/oy-on-bhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ginckrb5s"/><path class="oy-on-bhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-setting"} {...others} />);
}

export default Component;
