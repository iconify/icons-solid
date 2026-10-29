import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rbfqm4b8t.css';
import '../../css/z/znerp6b0c.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/r/rxmacrzpv.css';
import '../../css/s/smls78shz.css';
import '../../css/q/qwulfyb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rbfqm4b8t wm-deco"/><path class="wm-deco znerp6b0c"/><path class="o7-ag87sb wm-deco"/><path class="rxmacrzpv wm-k"/><path class="smls78shz wm-a"/><path class="qwulfyb5m wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:door-closed-blueprint"} {...others} />);
}

export default Component;
