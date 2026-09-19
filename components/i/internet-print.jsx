import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1ewvkqje.css';
import '../../css/v/vvytp-bxb.css';
import '../../css/r/rfbbqhsqc.css';
import '../../css/n/n25-ct7ex.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="o1ewvkqje"/><path clip-rule="evenodd" class="vvytp-bxb"/><path clip-rule="evenodd" class="rfbbqhsqc"/><path class="n25-ct7ex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:internet-print"} {...others} />);
}

export default Component;
