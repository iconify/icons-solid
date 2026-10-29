import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j853l_ius.css';
import '../../css/v/vwhyjknhi.css';
import '../../css/m/m50p1qb4g.css';
import '../../css/x/x4mio0oxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="j853l_ius"/><path class="vwhyjknhi wm-a"/><path class="m50p1qb4g"/><path class="wm-a x4mio0oxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:messages-duo"} {...others} />);
}

export default Component;
