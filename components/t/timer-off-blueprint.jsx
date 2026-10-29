import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ihwjsybbq.css';
import '../../css/j/jkq0mbbka.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/e/e5b_eb2yp.css';
import '../../css/c/ck-4ht99s.css';
import '../../css/v/v3uzkxb0u.css';
import '../../css/p/plkjttjbe.css';
import '../../css/d/d6b7dubbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ihwjsybbq wm-deco"/><path class="jkq0mbbka wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="e5b_eb2yp wm-k"/><path class="ck-4ht99s wm-a"/><path class="v3uzkxb0u wm-s"/><path class="plkjttjbe wm-k"/><path class="d6b7dubbd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:timer-off-blueprint"} {...others} />);
}

export default Component;
