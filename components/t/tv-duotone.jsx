import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p_xoypbbt.css';
import '../../css/o/odu7g4t5k.css';
import '../../css/j/j8em_-b0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p_xoypbbt"/><path class="odu7g4t5k"/><path class="j8em_-b0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:tv-duotone"} {...others} />);
}

export default Component;
