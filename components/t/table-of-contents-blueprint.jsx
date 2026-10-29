import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n_5e0ub-q.css';
import '../../css/g/g5c0xl14p.css';
import '../../css/g/g025w5bfv.css';
import '../../css/c/crxwkibzs.css';
import '../../css/y/yz09l_ndw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="n_5e0ub-q wm-deco"/><path class="g5c0xl14p wm-deco"/><path class="g025w5bfv wm-k"/><path class="crxwkibzs wm-a"/><path class="wm-k yz09l_ndw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:table-of-contents-blueprint"} {...others} />);
}

export default Component;
