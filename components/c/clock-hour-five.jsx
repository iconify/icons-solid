import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx_j5lb4z.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/n/n91z35b-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="lx_j5lb4z"/><circle class="mpf1g8bav"/><path class="n91z35b-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clock-hour-five"} {...others} />);
}

export default Component;
