import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uoqd-xitt.css';
import '../../css/v/vg2dc9z-o.css';
import '../../css/q/qt3_ghwjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="uoqd-xitt"/><path class="vg2dc9z-o wm-a"/><path class="qt3_ghwjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:jalebi-duo"} {...others} />);
}

export default Component;
