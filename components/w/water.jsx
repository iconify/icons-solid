import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvyywz4ct.css';
import '../../css/r/rdb9x_bgl.css';
import '../../css/k/kva08pblc.css';
import '../../css/l/lfpoo5_5e.css';
import '../../css/d/dbj84rvqm.css';
import '../../css/k/kwpl44x6w.css';
import '../../css/w/ws10a1b8r.css';
import '../../css/o/ocwa98bzr.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="pvyywz4ct"/><path class="rdb9x_bgl"/><path class="kva08pblc"/><path class="lfpoo5_5e"/><path class="dbj84rvqm"/><path class="kwpl44x6w"/><path class="ws10a1b8r"/><path class="ocwa98bzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:water"} {...others} />);
}

export default Component;
