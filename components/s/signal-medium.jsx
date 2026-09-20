import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/s/skoc4sb6l.css';
import '../../css/j/j6yfgv4gv.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="skoc4sb6l"/><path class="j6yfgv4gv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:signal-medium"} {...others} />);
}

export default Component;
