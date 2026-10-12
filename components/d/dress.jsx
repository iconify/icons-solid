import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvaohclyh.css';
import '../../css/f/f1wbq215n.css';
import '../../css/u/ut3v9tzgs.css';
import '../../css/o/o3ns5fy5r.css';
import '../../css/e/ea4fvur5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qvaohclyh"/><path class="f1wbq215n"/><path class="ut3v9tzgs"/><path class="o3ns5fy5r"/><path class="ea4fvur5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dress"} {...others} />);
}

export default Component;
