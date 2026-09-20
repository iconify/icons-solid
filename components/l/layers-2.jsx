import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp0erdbtt.css';
import '../../css/p/p2xgsmn3m.css';
import '../../css/p/pv_xh9x_m.css';
import '../../css/a/avxctlrqg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="mp0erdbtt"/><path class="p2xgsmn3m"/><path class="pv_xh9x_m"/><path class="avxctlrqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:layers-2"} {...others} />);
}

export default Component;
