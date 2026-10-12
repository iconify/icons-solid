import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx_j5lb4z.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/m/m53f6do5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="lx_j5lb4z"/><circle class="mpf1g8bav"/><path class="m53f6do5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clock-hour-six"} {...others} />);
}

export default Component;
