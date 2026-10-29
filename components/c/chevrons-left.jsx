import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pydca3mhu.css';
import '../../css/s/sr_3cb8-t.css';
import '../../css/e/er7yywkys.css';
import '../../css/i/ib9s5qies.css';
import '../../css/e/eoplytbtp.css';
import '../../css/s/svdujrbce.css';
import '../../css/d/dz-w9_b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="pydca3mhu wm-shadow"/><path class="sr_3cb8-t"/><path class="er7yywkys"/><path class="ib9s5qies"/><path class="eoplytbtp wm-shine"/><path class="svdujrbce wm-deco"/><path class="dz-w9_b8f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chevrons-left"} {...others} />);
}

export default Component;
