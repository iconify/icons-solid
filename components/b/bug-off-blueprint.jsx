import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kq1cq4bwz.css';
import '../../css/m/muhsa3p5n.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/q/q8r1k27pd.css';
import '../../css/b/bnw9o7z0h.css';
import '../../css/v/v3uzkxb0u.css';
import '../../css/m/mntoi5c4j.css';
import '../../css/d/d6b7dubbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="kq1cq4bwz wm-deco"/><path class="muhsa3p5n wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="q8r1k27pd wm-k"/><path class="bnw9o7z0h wm-a"/><path class="v3uzkxb0u wm-s"/><path class="mntoi5c4j wm-k"/><path class="d6b7dubbd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bug-off-blueprint"} {...others} />);
}

export default Component;
