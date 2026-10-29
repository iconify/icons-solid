import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kobygob2d.css';
import '../../css/p/p51kjbcdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kobygob2d"/><path class="p51kjbcdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-round-duo"} {...others} />);
}

export default Component;
