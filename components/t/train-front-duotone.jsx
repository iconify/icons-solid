import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_3mstbyq.css';
import '../../css/x/xh0qke_up.css';
import '../../css/l/lo2x74bux.css';
import '../../css/c/c_53ogbue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i_3mstbyq"/><path class="xh0qke_up"/><path class="lo2x74bux"/><path class="c_53ogbue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:train-front-duotone"} {...others} />);
}

export default Component;
