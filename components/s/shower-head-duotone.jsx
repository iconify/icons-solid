import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/df5km-bgn.css';
import '../../css/p/pishzubsf.css';
import '../../css/i/ix1b_41hr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="df5km-bgn"/><path class="pishzubsf"/><path class="ix1b_41hr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shower-head-duotone"} {...others} />);
}

export default Component;
