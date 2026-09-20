import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ay49rbbdp.css';
import '../../css/r/rc_eaccxy.css';
import '../../css/e/ejdkgccas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ay49rbbdp"/><path class="rc_eaccxy"/><path class="ejdkgccas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-like-broken"} {...others} />);
}

export default Component;
