import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nc23yw7-v.css';
import '../../css/m/m24ig1bjm.css';
import '../../css/w/w_x3o7r4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nc23yw7-v"/><path class="m24ig1bjm"/><path class="w_x3o7r4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:access"} {...others} />);
}

export default Component;
