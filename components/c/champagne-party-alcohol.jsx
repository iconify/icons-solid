import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/wxc64v7_t.css';
import '../../css/e/eqo8hz7-h.css';
import '../../css/q/qwx3zhbcs.css';
import '../../css/w/wj56j82bm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="wxc64v7_t"/><path class="eqo8hz7-h"/><path class="qwx3zhbcs"/><path class="wj56j82bm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:champagne-party-alcohol"} {...others} />);
}

export default Component;
