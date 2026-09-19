import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/lfwfykbre.css';
import '../../css/u/uh41w4bwu.css';
import '../../css/l/lq4_xjbhf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="lfwfykbre"/><path class="uh41w4bwu"/><path class="lq4_xjbhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:certificate"} {...others} />);
}

export default Component;
