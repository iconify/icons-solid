import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/j7tuslbdb.css';
import '../../css/e/ep38k9sbz.css';
import '../../css/h/hue5pyb0y.css';
import '../../css/v/vaoqecb1b.css';
import '../../css/x/xrx17sbgo.css';
import '../../css/r/r0hsqsa1k.css';
import '../../css/m/mt3h39b8h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="j7tuslbdb"/><path class="ep38k9sbz"/><path class="hue5pyb0y"/><path class="vaoqecb1b"/><path class="xrx17sbgo"/><path class="r0hsqsa1k"/><path class="mt3h39b8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:news-paper"} {...others} />);
}

export default Component;
