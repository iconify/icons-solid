import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qccsvpbeb.css';
import '../../css/a/a2by68ltf.css';
import '../../css/c/csbdrc94y.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="qccsvpbeb"/><path class="a2by68ltf"/><path class="csbdrc94y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:camera-noflash"} {...others} />);
}

export default Component;
