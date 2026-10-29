import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p8jzkvbki.css';
import '../../css/w/wbow0vbca.css';
import '../../css/o/oe5vmrb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="p8jzkvbki"/><path class="wbow0vbca wm-a"/><path class="oe5vmrb1n wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:crystal-ball"} {...others} />);
}

export default Component;
