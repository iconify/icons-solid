import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gw5io-bbr.css';
import '../../css/b/bejwiwtrh.css';
import '../../css/j/jtsi5u_mv.css';
import '../../css/n/nc2b2uohv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gw5io-bbr"/><path class="bejwiwtrh"/><path class="jtsi5u_mv"/><path clip-rule="evenodd" class="nc2b2uohv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bot-outline"} {...others} />);
}

export default Component;
