import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mgs_1f9ue.css';
import '../../css/t/t6g5ptbhe.css';
import '../../css/i/i_muin0hb.css';
import '../../css/d/d_atqwb9x.css';
import '../../css/x/xgiq5obvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mgs_1f9ue wm-shadow"/><path class="t6g5ptbhe"/><path class="i_muin0hb"/><path class="d_atqwb9x"/><path class="xgiq5obvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:crop"} {...others} />);
}

export default Component;
