import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e8ec07r2b.css';
import '../../css/n/njy_73bsg.css';
import '../../css/h/h249wti1f.css';
import '../../css/p/pc9z48big.css';
import '../../css/w/wabd8kb8q.css';
import '../../css/a/agqy1j0-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="e8ec07r2b wm-deco"/><path class="njy_73bsg wm-deco"/><path class="h249wti1f wm-deco"/><path class="pc9z48big wm-k"/><path class="wabd8kb8q wm-a"/><path class="agqy1j0-t wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:citrus-blueprint"} {...others} />);
}

export default Component;
