import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/osy_6ibpv.css';
import '../../css/q/qn-n58k_h.css';
import '../../css/g/gu3ws80px.css';
import '../../css/b/bdx1rwbro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="osy_6ibpv wm-shadow"/><path class="qn-n58k_h"/><path class="gu3ws80px"/><path class="bdx1rwbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:chart-area"} {...others} />);
}

export default Component;
