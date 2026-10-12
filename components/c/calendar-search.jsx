import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq7akpbfi.css';
import '../../css/i/ifivxibrp.css';
import '../../css/w/w6t_tbd_w.css';
import '../../css/b/by0e-dbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nq7akpbfi"/><rect class="ifivxibrp"/><path class="w6t_tbd_w"/><path class="by0e-dbsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:calendar-search"} {...others} />);
}

export default Component;
