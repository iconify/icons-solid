import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ow44-uqiu.css';
import '../../css/f/fvun-abzf.css';
import '../../css/c/c_apmbcjm.css';
import '../../css/d/df2pzh_wy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ow44-uqiu"/><path class="fvun-abzf"/><path class="c_apmbcjm"/><path class="df2pzh_wy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-large-broken"} {...others} />);
}

export default Component;
