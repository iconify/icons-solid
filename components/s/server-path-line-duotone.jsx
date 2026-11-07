import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nk8ojzxvh.css';
import '../../css/p/p0-5cbb5j.css';
import '../../css/z/zopjch_2q.css';
import '../../css/i/itzdzgb-y.css';
import '../../css/k/k97ygbbpb.css';
import '../../css/c/cc2d90bow.css';
import '../../css/c/c4emy9bvw.css';
import '../../css/h/hz1k-gbkm.css';
import '../../css/c/c0vhcdb5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nk8ojzxvh"/><path class="p0-5cbb5j"/><circle class="zopjch_2q"/><path class="itzdzgb-y"/><path class="k97ygbbpb"/><path class="cc2d90bow"/><path class="c4emy9bvw"/><path class="hz1k-gbkm"/><path class="c0vhcdb5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-path-line-duotone"} {...others} />);
}

export default Component;
