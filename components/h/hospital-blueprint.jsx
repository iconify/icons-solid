import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/ykzi9w-5s.css';
import '../../css/k/kespawbvd.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/b/b134ehppy.css';
import '../../css/d/d5ox4i4-t.css';
import '../../css/q/qwulfyb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco ykzi9w-5s"/><path class="kespawbvd wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="b134ehppy wm-k"/><path class="d5ox4i4-t wm-a"/><path class="qwulfyb5m wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hospital-blueprint"} {...others} />);
}

export default Component;
