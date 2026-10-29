import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c1fw99ysd.css';
import '../../css/f/f3tafbb9x.css';
import '../../css/z/zbsyr1dde.css';
import '../../css/f/fu-yhsexq.css';
import '../../css/m/m9fy4_0ed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="c1fw99ysd"/><path class="f3tafbb9x wm-a"/><path class="zbsyr1dde"/><path class="fu-yhsexq"/><path class="m9fy4_0ed wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hospital-duo"} {...others} />);
}

export default Component;
