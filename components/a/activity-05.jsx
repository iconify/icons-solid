import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w9m3pkq5w.css';
import '../../css/p/pc8a5xtuo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w9m3pkq5w"/><path class="pc8a5xtuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:activity-05"} {...others} />);
}

export default Component;
