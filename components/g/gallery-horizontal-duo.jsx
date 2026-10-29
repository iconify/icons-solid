import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kw9g0zbgq.css';
import '../../css/o/od38u2bjg.css';
import '../../css/o/omtqkcbfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kw9g0zbgq"/><path class="od38u2bjg wm-a"/><path class="omtqkcbfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gallery-horizontal-duo"} {...others} />);
}

export default Component;
