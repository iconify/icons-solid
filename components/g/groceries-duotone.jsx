import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/simuctb5x.css';
import '../../css/u/uklx4ab3h.css';
import '../../css/n/n171dubne.css';
import '../../css/q/q_hxl1s-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="simuctb5x"/><path class="uklx4ab3h"/><path class="n171dubne"/><path class="q_hxl1s-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:groceries-duotone"} {...others} />);
}

export default Component;
