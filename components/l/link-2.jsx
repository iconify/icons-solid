import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vs8kg-b-g.css';
import '../../css/b/bahwpqbsb.css';
import '../../css/r/r0du77lky.css';
import '../../css/d/dr_bg76sj.css';
import '../../css/e/eielzi6bo.css';
import '../../css/d/dba74abyc.css';
import '../../css/l/l2d9ev89z.css';
import '../../css/q/q3lu9gfyl.css';
import '../../css/l/lztodmb5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vs8kg-b-g wm-shadow"/><path class="bahwpqbsb wm-shadow"/><path class="r0du77lky"/><path class="dr_bg76sj"/><path class="eielzi6bo"/><path class="dba74abyc"/><path class="l2d9ev89z wm-shine"/><path class="q3lu9gfyl wm-shine"/><path class="lztodmb5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:link-2"} {...others} />);
}

export default Component;
