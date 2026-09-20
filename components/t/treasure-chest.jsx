import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb5gxmwqk.css';
import '../../css/x/xq-2-oupo.css';
import '../../css/k/k_8bxsbam.css';
import '../../css/w/wexaf2alg.css';
import '../../css/b/bjyx_jbhk.css';
import '../../css/c/cqu2-kblh.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/k/ktfl9fbwq.css';
import '../../css/p/p5swwyb2r.css';
import '../../css/n/ngo6wacrn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zb5gxmwqk"/><path class="xq-2-oupo"/><path class="k_8bxsbam"/><path class="wexaf2alg"/><path class="bjyx_jbhk"/><circle class="cqu2-kblh"/><g class="jn8qy4bru"><path class="ktfl9fbwq"/><path class="p5swwyb2r"/><circle class="ngo6wacrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:treasure-chest"} {...others} />);
}

export default Component;
