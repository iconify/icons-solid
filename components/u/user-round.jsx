import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z7b5t3bqx.css';
import '../../css/y/yv45e1bdm.css';
import '../../css/r/rnnjj150b.css';
import '../../css/s/sccglgxzz.css';
import '../../css/x/xq2e3-u4d.css';
import '../../css/v/vql8zwbbw.css';
import '../../css/j/j3zger7wb.css';
import '../../css/u/uo-fskx1m.css';
import '../../css/k/kwuz42bbx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow z7b5t3bqx"/><path class="wm-shadow yv45e1bdm"/><path class="rnnjj150b"/><path class="sccglgxzz"/><path class="xq2e3-u4d"/><path class="vql8zwbbw"/><path class="j3zger7wb wm-shine"/><path class="uo-fskx1m wm-shine"/><path class="kwuz42bbx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:user-round"} {...others} />);
}

export default Component;
