import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ohw_5actf.css';
import '../../css/r/rd5_q5bmh.css';
import '../../css/y/y2b_7cbos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ohw_5actf"/><path class="rd5_q5bmh"/><path class="y2b_7cbos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-horizontal-center-linear"} {...others} />);
}

export default Component;
