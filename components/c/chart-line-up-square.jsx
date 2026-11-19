import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouctj5b8q.css';
import '../../css/d/dwxt_ku0j.css';
import '../../css/w/wbxs82bdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ouctj5b8q"/><path class="dwxt_ku0j"/><path class="wbxs82bdz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-line-up-square"} {...others} />);
}

export default Component;
