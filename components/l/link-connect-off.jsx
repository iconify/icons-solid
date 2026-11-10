import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j--35ya-s.css';
import '../../css/k/ka39gdb_u.css';
import '../../css/w/wfttsob6c.css';
import '../../css/x/xijrthbvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j--35ya-s"/><path class="ka39gdb_u"/><path class="wfttsob6c"/><path class="xijrthbvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:link-connect-off"} {...others} />);
}

export default Component;
