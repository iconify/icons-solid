import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yl3t4xw1v.css';
import '../../css/g/ga1a-bc8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yl3t4xw1v"/><path class="ga1a-bc8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:long-arrow-down-right"} {...others} />);
}

export default Component;
