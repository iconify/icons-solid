import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/x/xv2oc66nb.css';
import '../../css/u/u4pzetv0h.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="xv2oc66nb"/><path class="u4pzetv0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:pie-quarter"} {...others} />);
}

export default Component;
