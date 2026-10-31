import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fmamx3pek.css';
import '../../css/y/yh091swwc.css';
import '../../css/q/qt1yzwbqg.css';
import '../../css/h/houguy8uu.css';
import '../../css/s/suas05fhc.css';
import '../../css/e/e0fbnto_h.css';
import '../../css/r/rbgtbaceg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fmamx3pek wm-k"/><path class="wm-deco yh091swwc"/><path class="qt1yzwbqg wm-k"/><path class="houguy8uu wm-shadow"/><path class="suas05fhc wm-shine"/><path class="e0fbnto_h wm-shine"/><path class="rbgtbaceg wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:folder-open"} {...others} />);
}

export default Component;
