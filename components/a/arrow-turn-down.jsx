import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tj2_4cbrs.css';
import '../../css/m/mptv_pb-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tj2_4cbrs"/><path class="mptv_pb-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-turn-down"} {...others} />);
}

export default Component;
