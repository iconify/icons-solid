import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/ydybuibjm.css';
import '../../css/e/ev-mkxbtb.css';
import '../../css/t/t9lk6ccxb.css';
import '../../css/r/rs8di8q3b.css';
import '../../css/f/f4cbm8b-g.css';
import '../../css/o/o8qldyb_u.css';
import '../../css/x/xcsr4c2yc.css';
import '../../css/q/q39mgwbiu.css';
import '../../css/a/a6xkd6y7f.css';
import '../../css/w/wth33kbvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ydybuibjm"/><path class="ev-mkxbtb wm-s"/><path class="t9lk6ccxb"/><path class="rs8di8q3b wm-shine"/><path class="f4cbm8b-g wm-k"/><path class="o8qldyb_u wm-a"/><path class="wm-s xcsr4c2yc"/><path class="q39mgwbiu"/><path class="a6xkd6y7f"/><path class="wm-shine wth33kbvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:gulal"} {...others} />);
}

export default Component;
