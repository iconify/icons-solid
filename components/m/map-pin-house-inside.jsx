import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/ms4826bgz.css';
import '../../css/h/hgq_yhiaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ms4826bgz"/><path class="hgq_yhiaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:map-pin-house-inside"} {...others} />);
}

export default Component;
