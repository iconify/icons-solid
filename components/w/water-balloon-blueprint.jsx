import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ibpnj1b4u.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/a/awi56bc7v.css';
import '../../css/x/x79el81bg.css';
import '../../css/w/w5sdavbab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ibpnj1b4u wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="awi56bc7v wm-k"/><path class="wm-a x79el81bg"/><path class="w5sdavbab wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:water-balloon-blueprint"} {...others} />);
}

export default Component;
