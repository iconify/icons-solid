import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d5sc3acjh.css';
import '../../css/o/oegy85hhy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="d5sc3acjh"/><path clip-rule="evenodd" class="oegy85hhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sodium-free"} {...others} />);
}

export default Component;
