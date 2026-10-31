import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/tw9sx24ci.css';
import '../../css/e/epw9f3qwq.css';
import '../../css/w/wxavrwbry.css';
import '../../css/g/gr2i7eb8v.css';
import '../../css/z/zyla41bsz.css';
import '../../css/h/hbi8hhkfx.css';
import '../../css/u/uto96pzfv.css';
import '../../css/m/mg3fx9goe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="tw9sx24ci"/><path class="epw9f3qwq"/><path class="wxavrwbry"/><path class="gr2i7eb8v wm-shine"/><path class="wm-k zyla41bsz"/><path class="hbi8hhkfx wm-a"/><path class="uto96pzfv"/><path class="mg3fx9goe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:flower"} {...others} />);
}

export default Component;
