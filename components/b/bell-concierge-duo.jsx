import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gn0ui-b3h.css';
import '../../css/o/oivip8bjf.css';
import '../../css/j/j5ce3sbao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gn0ui-b3h"/><path class="oivip8bjf wm-a"/><path class="j5ce3sbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-concierge-duo"} {...others} />);
}

export default Component;
