import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vtmphkbxs.css';
import '../../css/y/ypen9ccxg.css';
import '../../css/q/q7ftzha2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vtmphkbxs"/><path class="ypen9ccxg"/><path class="q7ftzha2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:t-shirt"} {...others} />);
}

export default Component;
