import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y3rlqzmys.css';
import '../../css/i/i378c-rig.css';
import '../../css/r/rqaq9tbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="y3rlqzmys"/><path class="i378c-rig wm-a"/><path class="rqaq9tbyz wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calendar-clock-solid"} {...others} />);
}

export default Component;
