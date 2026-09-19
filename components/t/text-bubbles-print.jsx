import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agn20jbrn.css';
import '../../css/r/r463ldb8d.css';
import '../../css/r/r5hdsivjz.css';
import '../../css/c/cz98s8cxn.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="agn20jbrn"/><path class="r463ldb8d"/><path class="r5hdsivjz"/><path class="cz98s8cxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:text-bubbles-print"} {...others} />);
}

export default Component;
