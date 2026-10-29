import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gr9r66bcx.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/c/cbppcqbmj.css';
import '../../css/y/ybp_pqrii.css';
import '../../css/l/lsgotya9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="gr9r66bcx wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="cbppcqbmj wm-k"/><path class="wm-a ybp_pqrii"/><path class="lsgotya9q wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:audio-lines-blueprint"} {...others} />);
}

export default Component;
