import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nelvtgb3f.css';
import '../../css/p/p-dojcbxs.css';
import '../../css/e/eshsd_oei.css';
import '../../css/f/f1z5e3bhu.css';
import '../../css/j/jm7u_x6kk.css';
import '../../css/y/y875pzbpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="nelvtgb3f"/><path class="p-dojcbxs"/><path class="eshsd_oei wm-s"/><path class="f1z5e3bhu"/><path class="jm7u_x6kk"/><path class="wm-a y875pzbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:witch-hat-duo"} {...others} />);
}

export default Component;
