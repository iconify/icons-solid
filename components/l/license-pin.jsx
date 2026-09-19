import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o2_7s2bcb.css';
import '../../css/r/rl9hk-b7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o2_7s2bcb"/><path class="rl9hk-b7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:license-pin"} {...others} />);
}

export default Component;
