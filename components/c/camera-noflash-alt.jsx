import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/m/m52ujhbov.css';
import '../../css/w/wdqcl6bim.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="m52ujhbov"/><path class="wdqcl6bim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:camera-noflash-alt"} {...others} />);
}

export default Component;
