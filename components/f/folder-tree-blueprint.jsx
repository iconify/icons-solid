import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p45bzgb3t.css';
import '../../css/a/ar6hvmq4u.css';
import '../../css/a/a8i0rnq8v.css';
import '../../css/w/wri5opbdz.css';
import '../../css/o/ousw4_gnu.css';
import '../../css/r/rfkkjjfoa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="p45bzgb3t wm-deco"/><path class="ar6hvmq4u wm-deco"/><path class="a8i0rnq8v wm-deco"/><path class="wm-k wri5opbdz"/><path class="ousw4_gnu wm-a"/><path class="rfkkjjfoa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-tree-blueprint"} {...others} />);
}

export default Component;
