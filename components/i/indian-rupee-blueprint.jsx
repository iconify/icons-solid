import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rypwtpbbu.css';
import '../../css/a/agd28c7kq.css';
import '../../css/d/d06bm4v_d.css';
import '../../css/s/s34sxkm_t.css';
import '../../css/s/sdz3hro5f.css';
import '../../css/l/lsxnzrbgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="rypwtpbbu wm-deco"/><path class="agd28c7kq wm-deco"/><path class="d06bm4v_d wm-k"/><path class="s34sxkm_t wm-a"/><path class="sdz3hro5f wm-k"/><path class="lsxnzrbgr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:indian-rupee-blueprint"} {...others} />);
}

export default Component;
