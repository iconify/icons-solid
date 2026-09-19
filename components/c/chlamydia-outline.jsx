import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/haix9ib8v.css';
import '../../css/d/dcrt2swbm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="haix9ib8v"/><path clip-rule="evenodd" class="dcrt2swbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:chlamydia-outline"} {...others} />);
}

export default Component;
