import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nbu_9mupa.css';
import '../../css/f/fse993j_o.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/w/wtf85k97d.css';
import '../../css/l/le4nw3b-s.css';
import '../../css/x/xkyxev1-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="nbu_9mupa wm-deco"/><path class="fse993j_o wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k wtf85k97d"/><path class="le4nw3b-s wm-a"/><path class="wm-k xkyxev1-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scan-text-blueprint"} {...others} />);
}

export default Component;
