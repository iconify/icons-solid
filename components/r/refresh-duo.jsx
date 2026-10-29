import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r-fvff_qk.css';
import '../../css/x/xgrg7usag.css';
import '../../css/p/pse4-422d.css';
import '../../css/m/m5igdmzqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="r-fvff_qk"/><path class="wm-a xgrg7usag"/><path class="pse4-422d"/><path class="m5igdmzqn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:refresh-duo"} {...others} />);
}

export default Component;
