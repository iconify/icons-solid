import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ij26-ibti.css';
import '../../css/t/tcqfz7n8x.css';
import '../../css/f/fzoh80gbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ij26-ibti"/><path class="tcqfz7n8x"/><path clip-rule="evenodd" class="fzoh80gbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:chevron-double-up-r"} {...others} />);
}

export default Component;
