import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g53wcg3qh.css';
import '../../css/u/uvc3jdbwi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="g53wcg3qh"/><path clip-rule="evenodd" class="uvc3jdbwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:female-sex-worker"} {...others} />);
}

export default Component;
