import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhjkkac0m.css';
import '../../css/w/wfu6nh6bn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mhjkkac0m"/><path class="wfu6nh6bn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:searching"} {...others} />);
}

export default Component;
