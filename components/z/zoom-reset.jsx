import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/d/do43ab4pq.css';
import '../../css/v/vkljnvb-w.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="do43ab4pq"/><path class="vkljnvb-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:zoom-reset"} {...others} />);
}

export default Component;
