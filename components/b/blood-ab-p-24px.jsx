import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cna9ecbpk.css';
import '../../css/z/zinrowbcn.css';
import '../../css/y/y5hl0bc-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cna9ecbpk"/><path clip-rule="evenodd" class="zinrowbcn"/><path class="y5hl0bc-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-ab-p-24px"} {...others} />);
}

export default Component;
