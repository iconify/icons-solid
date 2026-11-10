import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wc15cz76u.css';
import '../../css/f/fwajec7zt.css';
import '../../css/w/wal1prbel.css';
import '../../css/m/mbx3pybcp.css';
import '../../css/q/q1m0h-qpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wc15cz76u"/><path class="fwajec7zt"/><circle class="wal1prbel"/><path class="mbx3pybcp"/><path clip-rule="evenodd" class="q1m0h-qpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:perfume-men"} {...others} />);
}

export default Component;
