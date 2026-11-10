import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/usk1e4byl.css';
import '../../css/p/psyvu22kr.css';
import '../../css/v/v9iuqi29k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="usk1e4byl"/><path class="psyvu22kr"/><path class="v9iuqi29k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:save"} {...others} />);
}

export default Component;
