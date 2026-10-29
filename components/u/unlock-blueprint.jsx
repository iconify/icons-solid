import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dl6rh5bzb.css';
import '../../css/k/kgoj5abwo.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/n/nvjwwccph.css';
import '../../css/n/nc837pzto.css';
import '../../css/i/i613agbrs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="dl6rh5bzb wm-deco"/><path class="kgoj5abwo wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="nvjwwccph wm-k"/><path class="nc837pzto wm-a"/><path class="i613agbrs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:unlock-blueprint"} {...others} />);
}

export default Component;
