import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujnoifb0t.css';
import '../../css/v/vkvjbvbux.css';
import '../../css/c/c_d4n7blc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ujnoifb0t"/><path class="vkvjbvbux"/><path class="c_d4n7blc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:monitor-speaker-duotone"} {...others} />);
}

export default Component;
