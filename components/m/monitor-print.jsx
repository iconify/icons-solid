import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zau_029ve.css';
import '../../css/d/ds0-m5bxn.css';
import '../../css/b/bej3h2bvr.css';
import '../../css/p/pw4dn1s2u.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="zau_029ve"/><path clip-rule="evenodd" class="ds0-m5bxn"/><path clip-rule="evenodd" class="bej3h2bvr"/><path class="pw4dn1s2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:monitor-print"} {...others} />);
}

export default Component;
