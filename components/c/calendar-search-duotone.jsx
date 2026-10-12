import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lh24j6ihd.css';
import '../../css/p/p3poopb-f.css';
import '../../css/k/kmegsac9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lh24j6ihd"/><path class="p3poopb-f"/><path class="kmegsac9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:calendar-search-duotone"} {...others} />);
}

export default Component;
