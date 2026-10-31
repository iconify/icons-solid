import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zj1td1w5s.css';
import '../../css/j/jbx8ahbdi.css';
import '../../css/z/z_6ptwbhl.css';
import '../../css/l/lvwj8zv0y.css';
import '../../css/d/d-c_quigx.css';
import '../../css/p/pwdc-me_r.css';
import '../../css/t/tq9yzjbwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zj1td1w5s"/><path class="jbx8ahbdi wm-s"/><path class="wm-shine z_6ptwbhl"/><path class="lvwj8zv0y wm-k"/><path class="d-c_quigx wm-a"/><path class="pwdc-me_r wm-s"/><path class="tq9yzjbwu wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:brain-cog"} {...others} />);
}

export default Component;
