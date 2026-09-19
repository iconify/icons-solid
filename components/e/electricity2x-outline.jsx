import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lzcxp6rgp.css';
import '../../css/z/zg-d3i4so.css';
import '../../css/d/d0t86vbpx.css';
import '../../css/x/xky54bc0e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="lzcxp6rgp"/><path clip-rule="evenodd" class="zg-d3i4so"/><path class="d0t86vbpx"/><path clip-rule="evenodd" class="xky54bc0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:electricity2x-outline"} {...others} />);
}

export default Component;
