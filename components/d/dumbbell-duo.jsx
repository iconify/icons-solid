import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qnn8q_69m.css';
import '../../css/g/gndq0ebyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qnn8q_69m"/><path class="gndq0ebyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dumbbell-duo"} {...others} />);
}

export default Component;
