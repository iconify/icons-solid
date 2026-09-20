import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tev417bot.css';
import '../../css/w/woe_l7brn.css';
import '../../css/q/q_ny5zrfh.css';
import '../../css/e/ezqgrwb5k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tev417bot"/><path class="woe_l7brn"/><path class="q_ny5zrfh"/><path class="ezqgrwb5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:shipping-box-2"} {...others} />);
}

export default Component;
