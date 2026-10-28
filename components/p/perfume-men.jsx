import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a2hki4b-t.css';
import '../../css/f/fwajec7zt.css';
import '../../css/w/wal1prbel.css';
import '../../css/h/hrbaw7s7k.css';
import '../../css/q/q1m0h-qpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a2hki4b-t"/><path class="fwajec7zt"/><circle class="wal1prbel"/><path class="hrbaw7s7k"/><path clip-rule="evenodd" class="q1m0h-qpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:perfume-men"} {...others} />);
}

export default Component;
