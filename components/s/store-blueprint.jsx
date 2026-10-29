import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fhl1wub4v.css';
import '../../css/m/mznwbyd6w.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/r/r646fibse.css';
import '../../css/n/nfcb_rb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fhl1wub4v wm-deco"/><path class="mznwbyd6w wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="r646fibse wm-k"/><path class="nfcb_rb2q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:store-blueprint"} {...others} />);
}

export default Component;
