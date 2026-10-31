import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dop_3xgfm.css';
import '../../css/t/toncukbto.css';
import '../../css/m/mr1pcgbtj.css';
import '../../css/c/cacomnlqd.css';
import '../../css/z/zbgyb8bwb.css';
import '../../css/i/iteyxabza.css';
import '../../css/j/jrrkjzfpz.css';
import '../../css/a/a3glpmbjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dop_3xgfm"/><path class="toncukbto"/><path class="mr1pcgbtj wm-shine"/><path class="cacomnlqd wm-k"/><path class="wm-a zbgyb8bwb"/><path class="iteyxabza"/><path class="jrrkjzfpz"/><path class="a3glpmbjn wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cloud-moon"} {...others} />);
}

export default Component;
