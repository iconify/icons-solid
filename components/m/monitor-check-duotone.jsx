import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjlljib5h.css';
import '../../css/k/kx1bn5j4c.css';
import '../../css/o/o3yuhybec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yjlljib5h"/><path class="kx1bn5j4c"/><path class="o3yuhybec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-check-duotone"} {...others} />);
}

export default Component;
