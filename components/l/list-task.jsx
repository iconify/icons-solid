import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ps43wqbdq.css';
import '../../css/r/r_l-njc4f.css';
import '../../css/l/lbab3mbob.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="ps43wqbdq"/><path class="r_l-njc4f"/><path class="lbab3mbob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:list-task"} {...others} />);
}

export default Component;
