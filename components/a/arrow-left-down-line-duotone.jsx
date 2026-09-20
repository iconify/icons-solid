import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rb5lbohlx.css';
import '../../css/p/px4tm41-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rb5lbohlx"/><path class="px4tm41-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-left-down-line-duotone"} {...others} />);
}

export default Component;
