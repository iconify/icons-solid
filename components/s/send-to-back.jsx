import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pujqozcot.css';
import '../../css/e/e5hwqmb1o.css';
import '../../css/x/xdb_yfbli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pujqozcot"/><rect transform="matrix(0 -1 -1 0 10.46 10.39)" class="e5hwqmb1o"/><path class="xdb_yfbli"/><rect transform="matrix(0 -1 -1 0 22.23 22.3)" class="e5hwqmb1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:send-to-back"} {...others} />);
}

export default Component;
