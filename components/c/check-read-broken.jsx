import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d58q_4bdh.css';
import '../../css/f/fg-hc3ysv.css';
import '../../css/j/japrfgbml.css';
import '../../css/c/c3xus2otf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d58q_4bdh"/><path class="fg-hc3ysv"/><path class="japrfgbml"/><path class="c3xus2otf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:check-read-broken"} {...others} />);
}

export default Component;
