import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5j-yozem.css';
import '../../css/h/h109fbbfv.css';
import '../../css/b/bwdsidbcp.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p5j-yozem"/><path class="h109fbbfv"/><path class="bwdsidbcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:headphone-print"} {...others} />);
}

export default Component;
