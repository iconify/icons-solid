import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/z/zaqvlfbvr.css';
import '../../css/r/ra5211m5d.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="zaqvlfbvr"/><path class="ra5211m5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:file-upload"} {...others} />);
}

export default Component;
