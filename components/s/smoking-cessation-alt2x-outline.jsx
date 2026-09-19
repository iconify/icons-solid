import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d8f-0pbsr.css';
import '../../css/e/e267uplnt.css';
import '../../css/b/bu1rx-zrh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="d8f-0pbsr"/><path class="e267uplnt"/><path clip-rule="evenodd" class="bu1rx-zrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:smoking-cessation-alt2x-outline"} {...others} />);
}

export default Component;
