import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm5tfv27h.css';
import '../../css/d/dbq_7acij.css';
import '../../css/x/xxavhac7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dm5tfv27h"/><path class="dbq_7acij"/><path class="xxavhac7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:chart-network-duotone"} {...others} />);
}

export default Component;
