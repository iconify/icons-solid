import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v5-io1k7w.css';
import '../../css/o/oi3dihbsi.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="v5-io1k7w"/><path clip-rule="evenodd" class="oi3dihbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:archive-box-x-mark"} {...others} />);
}

export default Component;
