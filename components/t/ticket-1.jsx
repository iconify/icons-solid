import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v-bbrwb_q.css';
import '../../css/e/ee2q5l8xi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v-bbrwb_q"/><path class="ee2q5l8xi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:ticket-1"} {...others} />);
}

export default Component;
