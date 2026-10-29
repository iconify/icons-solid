import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rpsv5dbfy.css';
import '../../css/n/ngj96acjh.css';
import '../../css/z/z31jlbbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="rpsv5dbfy"/><path class="ngj96acjh wm-a"/><path class="z31jlbbvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:factory-duo"} {...others} />);
}

export default Component;
