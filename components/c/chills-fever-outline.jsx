import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_jyn858d.css';
import '../../css/r/rvp3pobsz.css';
import '../../css/z/z27jm6b0n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e_jyn858d"/><path class="rvp3pobsz"/><path clip-rule="evenodd" class="z27jm6b0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chills-fever-outline"} {...others} />);
}

export default Component;
