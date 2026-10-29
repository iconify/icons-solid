import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fugddbchv.css';
import '../../css/x/xx_fxzbug.css';
import '../../css/u/u1jmxdb2k.css';
import '../../css/h/hit6wrbqv.css';
import '../../css/m/mqfx5dq5o.css';
import '../../css/m/mu49p3bol.css';
import '../../css/w/wtpnztqeq.css';
import '../../css/k/kjxbrbbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fugddbchv wm-deco"/><path class="wm-deco xx_fxzbug"/><path class="u1jmxdb2k wm-deco"/><path class="hit6wrbqv wm-k"/><path class="mqfx5dq5o wm-a"/><path class="mu49p3bol wm-s"/><path class="wm-k wtpnztqeq"/><path class="kjxbrbbuy wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:notebook-pen-blueprint"} {...others} />);
}

export default Component;
