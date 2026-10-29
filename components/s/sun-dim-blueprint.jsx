import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rz_0dmblq.css';
import '../../css/b/bxjv56brc.css';
import '../../css/d/dzjkh2bst.css';
import '../../css/q/q42xo2b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rz_0dmblq wm-deco"/><path class="bxjv56brc wm-deco"/><path class="dzjkh2bst wm-k"/><path class="q42xo2b2p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sun-dim-blueprint"} {...others} />);
}

export default Component;
