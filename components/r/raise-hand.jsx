import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/x/x8yy2vlmw.css';
import '../../css/q/q7ij7mblw.css';
import '../../css/f/fht-k7bke.css';
import '../../css/x/x9kogwbeq.css';
import '../../css/d/dc_kbr8xr.css';
import '../../css/v/v3bilzbwu.css';
import '../../css/q/qecunebco.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="x8yy2vlmw"/><path clip-rule="evenodd" class="q7ij7mblw"/><path class="fht-k7bke"/><path clip-rule="evenodd" class="x9kogwbeq"/></g><path clip-rule="evenodd" class="dc_kbr8xr"/><path clip-rule="evenodd" class="v3bilzbwu"/><path clip-rule="evenodd" class="qecunebco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:raise-hand"} {...others} />);
}

export default Component;
