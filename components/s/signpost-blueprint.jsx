import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/ko5p6abwm.css';
import '../../css/p/pl_e9-0xy.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/p/pwl_zqbqj.css';
import '../../css/e/e--mbmb3x.css';
import '../../css/i/ieerklqbj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ko5p6abwm wm-deco"/><path class="pl_e9-0xy wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="pwl_zqbqj wm-k"/><path class="e--mbmb3x wm-a"/><path class="ieerklqbj wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:signpost-blueprint"} {...others} />);
}

export default Component;
