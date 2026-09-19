import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kg0z_nz0n.css';
import '../../css/h/hq6medc3z.css';
import '../../css/e/e3paigb_o.css';
import '../../css/f/fyb61ow7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="kg0z_nz0n"/><path class="hq6medc3z"/><path class="e3paigb_o"/><path class="fyb61ow7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:calendar-outline"} {...others} />);
}

export default Component;
