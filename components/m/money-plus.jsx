import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eq_3nt3js.css';
import '../../css/r/r0ch1sbxc.css';
import '../../css/j/j798wsbhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="eq_3nt3js"/><path clip-rule="evenodd" class="r0ch1sbxc"/><path class="j798wsbhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:money-plus"} {...others} />);
}

export default Component;
