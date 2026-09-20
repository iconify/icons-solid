import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/la--7ib8h.css';
import '../../css/e/e06ot6o4h.css';
import '../../css/k/k85dgg62q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="la--7ib8h"/><path class="e06ot6o4h"/><path class="k85dgg62q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:box-minimalistic-bold"} {...others} />);
}

export default Component;
