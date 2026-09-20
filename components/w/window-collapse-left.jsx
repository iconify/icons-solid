import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/f/f6r4u0dcm.css';
import '../../css/d/dxmmmk1qu.css';
import '../../css/f/fspniabin.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="f6r4u0dcm"/><path class="dxmmmk1qu"/><path class="fspniabin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:window-collapse-left"} {...others} />);
}

export default Component;
