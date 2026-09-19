import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to5_hpm1w.css';
import '../../css/j/jl4u_lbmk.css';
import '../../css/k/ke28wwbst.css';
import '../../css/f/feb-xjmlk.css';
import '../../css/j/jc8zt29-l.css';
import '../../css/c/c599jt51r.css';
import '../../css/u/umk5vc3av.css';
import '../../css/t/t1y9-f3oy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="to5_hpm1w"><path class="jl4u_lbmk"/><path class="ke28wwbst"/><path class="feb-xjmlk"/><path class="jc8zt29-l"/><path class="c599jt51r"/><path class="umk5vc3av"/><path class="t1y9-f3oy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:unicast"} {...others} />);
}

export default Component;
