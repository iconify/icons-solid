import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zowiwwbmr.css';
import '../../css/z/zyly0dhik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zowiwwbmr"/><path class="zyly0dhik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-down-line-duotone"} {...others} />);
}

export default Component;
