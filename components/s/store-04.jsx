import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zcmestv1x.css';
import '../../css/w/w_3ky1b1v.css';
import '../../css/e/e_d3ajbae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zcmestv1x"/><path class="w_3ky1b1v"/><path class="e_d3ajbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:store-04"} {...others} />);
}

export default Component;
