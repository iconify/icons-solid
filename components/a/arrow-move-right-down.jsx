import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y45nggumb.css';
import '../../css/r/r1dcocbrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y45nggumb"/><path class="r1dcocbrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-move-right-down"} {...others} />);
}

export default Component;
