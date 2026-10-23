import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dt7t81_nm.css';
import '../../css/f/fvr250bdj.css';
import '../../css/v/vwy8x5bnj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="dt7t81_nm"/><path clip-rule="evenodd" class="fvr250bdj"/><path clip-rule="evenodd" class="vwy8x5bnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:dialysis-outline"} {...others} />);
}

export default Component;
