import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9wxy6bvh.css';
import '../../css/k/kswqd_21e.css';
import '../../css/e/ed8w_yb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n9wxy6bvh"/><path class="kswqd_21e"/><path class="ed8w_yb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bell-off"} {...others} />);
}

export default Component;
