import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/irxymccfj.css';
import '../../css/k/khfhn220m.css';
import '../../css/y/ylvh8-bia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="irxymccfj"/><path class="khfhn220m"/><path class="ylvh8-bia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:exchange-bitcoin"} {...others} />);
}

export default Component;
