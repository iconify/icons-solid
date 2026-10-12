import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/orbeogbtv.css';
import '../../css/c/c14ps85_j.css';
import '../../css/x/xaaxg8b6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="orbeogbtv"/><path class="c14ps85_j"/><path class="xaaxg8b6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:apple"} {...others} />);
}

export default Component;
