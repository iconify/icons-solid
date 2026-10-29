import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gc5-p1bnk.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/c/crfhsoutb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="gc5-p1bnk wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="crfhsoutb wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-blueprint"} {...others} />);
}

export default Component;
