import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s37llbcjt.css';
import '../../css/g/gz33uebcs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="s37llbcjt"/><path clip-rule="evenodd" class="gz33uebcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:i-groups-perspective-crowd"} {...others} />);
}

export default Component;
