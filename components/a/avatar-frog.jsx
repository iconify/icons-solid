import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4a0tubzg.css';
import '../../css/q/q7l5kgbhg.css';
import '../../css/c/c2_2vuu0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g4a0tubzg wm-k"/><path class="q7l5kgbhg wm-shine"/><path class="c2_2vuu0f wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:avatar-frog"} {...others} />);
}

export default Component;
