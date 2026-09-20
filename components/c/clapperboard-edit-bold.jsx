import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6oxflbgu.css';
import '../../css/x/xg0kfbcnh.css';
import '../../css/u/ufazf3xhi.css';
import '../../css/f/f4d5x_t8i.css';
import '../../css/r/r4rijabex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="q6oxflbgu"/><path class="xg0kfbcnh"/><path class="ufazf3xhi"/><path class="f4d5x_t8i"/><path clip-rule="evenodd" class="r4rijabex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-edit-bold"} {...others} />);
}

export default Component;
