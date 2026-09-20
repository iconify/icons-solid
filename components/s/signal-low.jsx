import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/c/c1-wzjpfx.css';
import '../../css/c/cc0j-4xhr.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="c1-wzjpfx"/><path class="cc0j-4xhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:signal-low"} {...others} />);
}

export default Component;
