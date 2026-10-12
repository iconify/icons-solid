import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mi3n832qv.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/h/hwzeqfy5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mi3n832qv"/><circle class="mpf1g8bav"/><path class="hwzeqfy5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:circle-half-horizontal"} {...others} />);
}

export default Component;
