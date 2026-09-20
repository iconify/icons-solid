import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vea8iybjt.css';
import '../../css/f/fvun-abzf.css';
import '../../css/c/c_apmbcjm.css';
import '../../css/h/hq35snb1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vea8iybjt"/><path class="fvun-abzf"/><path class="c_apmbcjm"/><path class="hq35snb1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-large-linear"} {...others} />);
}

export default Component;
