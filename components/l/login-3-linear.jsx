import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/npjnncbsm.css';
import '../../css/v/v0-ucqeuw.css';
import '../../css/g/g_eh3ebdg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="npjnncbsm"/><path class="v0-ucqeuw"/><path class="g_eh3ebdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:login-3-linear"} {...others} />);
}

export default Component;
