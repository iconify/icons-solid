import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q7b6p55ew.css';
import '../../css/u/uxsptjbvt.css';
import '../../css/o/opi96xvus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q7b6p55ew"/><path class="uxsptjbvt wm-a"/><path class="opi96xvus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wine-duo"} {...others} />);
}

export default Component;
