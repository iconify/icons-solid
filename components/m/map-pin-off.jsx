import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xb14rab2z.css';
import '../../css/h/hgq_yhiaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xb14rab2z"/><path class="hgq_yhiaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:map-pin-off"} {...others} />);
}

export default Component;
