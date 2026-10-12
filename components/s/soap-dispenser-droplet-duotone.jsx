import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ly71s_b6w.css';
import '../../css/o/ok5vfptqt.css';
import '../../css/l/l1m86fbpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ly71s_b6w"/><path class="ok5vfptqt"/><path class="l1m86fbpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:soap-dispenser-droplet-duotone"} {...others} />);
}

export default Component;
