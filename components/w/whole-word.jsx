import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xbt6p2bvs.css';
import '../../css/y/yudxgqi4e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xbt6p2bvs"/><path class="yudxgqi4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:whole-word"} {...others} />);
}

export default Component;
