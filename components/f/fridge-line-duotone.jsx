import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l9x_x5b4e.css';
import '../../css/p/pgfv6z-_o.css';
import '../../css/x/xc_fo9bdv.css';
import '../../css/f/f26ggybga.css';
import '../../css/t/tadkrybvn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l9x_x5b4e"/><path class="pgfv6z-_o"/><path class="xc_fo9bdv"/><path class="f26ggybga"/><path class="tadkrybvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fridge-line-duotone"} {...others} />);
}

export default Component;
