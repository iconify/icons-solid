import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gwof0sbkm.css';
import '../../css/t/th4mwabwz.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="gwof0sbkm"/><path clip-rule="evenodd" class="th4mwabwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:bookmark-print"} {...others} />);
}

export default Component;
