import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/behz2ei-t.css';
import '../../css/v/vu5vvzbot.css';
import '../../css/d/dbtawnhjo.css';
import '../../css/d/diu0kl_dq.css';
import '../../css/a/ayu1l-btz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="behz2ei-t wm-deco"/><path class="vu5vvzbot wm-deco"/><path class="dbtawnhjo wm-k"/><path class="diu0kl_dq wm-a"/><path class="ayu1l-btz wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:vr-headset-blueprint"} {...others} />);
}

export default Component;
