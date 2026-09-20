import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxxbevx9y.css';
import '../../css/c/c4g_yjbwf.css';
import '../../css/v/vwva7rs6y.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="lxxbevx9y"/><path clip-rule="evenodd" class="c4g_yjbwf"/><path clip-rule="evenodd" class="vwva7rs6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:house"} {...others} />);
}

export default Component;
