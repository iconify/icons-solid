import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m1l0kebse.css';
import '../../css/t/til55ifes.css';
import '../../css/p/psyzc1_dw.css';
import '../../css/m/mvz-u7b1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m1l0kebse"/><path class="til55ifes wm-a"/><path class="psyzc1_dw"/><path class="mvz-u7b1a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wand-sparkles-duo"} {...others} />);
}

export default Component;
