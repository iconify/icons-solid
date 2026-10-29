import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jp9fg595t.css';
import '../../css/a/a3k-1f3du.css';
import '../../css/e/e625k9alo.css';
import '../../css/y/yo_phy9yo.css';
import '../../css/e/e0poc-59r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="jp9fg595t wm-deco"/><path class="a3k-1f3du wm-deco"/><circle class="e625k9alo wm-k"/><path class="wm-k yo_phy9yo"/><path class="e0poc-59r wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wifi-off-blueprint"} {...others} />);
}

export default Component;
