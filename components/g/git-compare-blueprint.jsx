import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/r9949qb8j.css';
import '../../css/i/iyvdx2l5t.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/m/ms2t-0byp.css';
import '../../css/p/pzceqtw2u.css';
import '../../css/v/vo89sobde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="r9949qb8j wm-deco"/><path class="iyvdx2l5t wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="ms2t-0byp wm-k"/><path class="pzceqtw2u wm-a"/><path class="vo89sobde wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-compare-blueprint"} {...others} />);
}

export default Component;
