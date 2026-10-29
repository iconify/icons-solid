import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ah371nbbv.css';
import '../../css/v/vfx376v4r.css';
import '../../css/x/xm6k-ibev.css';
import '../../css/t/ti7s0kwlh.css';
import '../../css/r/rcb7clbki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ah371nbbv"/><path class="vfx376v4r wm-a"/><path class="wm-a xm6k-ibev"/><path class="ti7s0kwlh"/><path class="rcb7clbki wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:video-call-duo"} {...others} />);
}

export default Component;
