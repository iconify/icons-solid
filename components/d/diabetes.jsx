import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pmj1ijqie.css';
import '../../css/q/qjzua9bim.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="pmj1ijqie"/><path clip-rule="evenodd" class="qjzua9bim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:diabetes"} {...others} />);
}

export default Component;
