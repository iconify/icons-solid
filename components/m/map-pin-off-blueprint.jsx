import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/m9hq8sb9u.css';
import '../../css/k/kj7_d3b7q.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/h/h7d2yfbbl.css';
import '../../css/e/e39p62u0b.css';
import '../../css/v/v3uzkxb0u.css';
import '../../css/o/okibcyhqc.css';
import '../../css/d/d6b7dubbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="m9hq8sb9u wm-deco"/><path class="kj7_d3b7q wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="h7d2yfbbl wm-k"/><path class="e39p62u0b wm-a"/><path class="v3uzkxb0u wm-s"/><path class="okibcyhqc wm-k"/><path class="d6b7dubbd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:map-pin-off-blueprint"} {...others} />);
}

export default Component;
