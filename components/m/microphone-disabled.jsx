import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/e/eo-l1bb2w.css';
import '../../css/g/gn023qjry.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="eo-l1bb2w"/><path class="gn023qjry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:microphone-disabled"} {...others} />);
}

export default Component;
