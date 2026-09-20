import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u345ble3e.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5qf56fne.css';
import '../../css/s/sofibr7-l.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="u345ble3e"/><g transform="translate(2 4)" class="cuyn6tgcc"><circle class="s5qf56fne"/><circle class="sofibr7-l"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:cart"} {...others} />);
}

export default Component;
