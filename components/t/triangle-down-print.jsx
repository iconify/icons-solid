import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sh0l6mbrx.css';
import '../../css/f/fhu_5-bpl.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="sh0l6mbrx"/><path clip-rule="evenodd" class="fhu_5-bpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:triangle-down-print"} {...others} />);
}

export default Component;
