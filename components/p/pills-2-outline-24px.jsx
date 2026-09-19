import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r21yfljww.css';
import '../../css/r/rfvvw-b-k.css';
import '../../css/r/rw9cf1b_y.css';
import '../../css/k/kvmc7yb4x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r21yfljww"/><path clip-rule="evenodd" class="rfvvw-b-k"/><path class="rw9cf1b_y"/><path clip-rule="evenodd" class="kvmc7yb4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pills-2-outline-24px"} {...others} />);
}

export default Component;
