import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tjn-e4bgs.css';
import '../../css/t/tzagp_bxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tjn-e4bgs"/><path class="tzagp_bxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:arrow-down-right-waves"} {...others} />);
}

export default Component;
