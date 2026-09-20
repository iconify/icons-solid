import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/w90nt2dmo.css';
import '../../css/n/nlom9l3_e.css';
import '../../css/i/ibi7dnb2i.css';
import '../../css/d/dfvyt_btx.css';
import '../../css/u/uby_sorqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="w90nt2dmo"/><path class="nlom9l3_e"/></g><path class="ibi7dnb2i"/><path class="dfvyt_btx"/><path class="uby_sorqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-4-bold-duotone"} {...others} />);
}

export default Component;
