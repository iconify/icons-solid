import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gt0ja1byl.css';
import '../../css/u/u8zrf1b1o.css';
import '../../css/i/i_1-v-bwa.css';
import '../../css/a/akyy2abnj.css';
import '../../css/f/fzlatcc_e.css';
import '../../css/i/ig68dtbuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="gt0ja1byl wm-deco"/><path class="u8zrf1b1o wm-deco"/><path class="i_1-v-bwa wm-deco"/><path class="akyy2abnj wm-k"/><path class="fzlatcc_e wm-a"/><path class="ig68dtbuz wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:door-open-blueprint"} {...others} />);
}

export default Component;
