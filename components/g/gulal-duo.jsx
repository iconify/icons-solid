import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m0xij_otn.css';
import '../../css/e/echwhcbfg.css';
import '../../css/s/sd77o9bse.css';
import '../../css/x/xcsr4c2yc.css';
import '../../css/f/f4cbm8b-g.css';
import '../../css/o/o8qldyb_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="m0xij_otn"/><path class="echwhcbfg wm-a"/><path class="sd77o9bse wm-s"/><path class="wm-s xcsr4c2yc"/><path class="f4cbm8b-g"/><path class="o8qldyb_u wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gulal-duo"} {...others} />);
}

export default Component;
