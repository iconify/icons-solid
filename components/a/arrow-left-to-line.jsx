import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vnp6a-b8y.css';
import '../../css/d/d56_pbcee.css';
import '../../css/w/w_l_yzbyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vnp6a-b8y"/><path class="d56_pbcee"/><path class="w_l_yzbyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrow-left-to-line"} {...others} />);
}

export default Component;
