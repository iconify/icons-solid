import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cc53t4bin.css';
import '../../css/g/gyxe8j32r.css';
import '../../css/r/rg8vhvbio.css';
import '../../css/y/yrlx_k17q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cc53t4bin"/><path class="gyxe8j32r"/><path class="rg8vhvbio"/><path clip-rule="evenodd" class="yrlx_k17q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-outline"} {...others} />);
}

export default Component;
