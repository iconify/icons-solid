import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/yqmpubcny.css';
import '../../css/b/b43oy4bsa.css';
import '../../css/x/x673ds65d.css';
import '../../css/s/svqfe56ut.css';
import '../../css/d/d4i60kc2p.css';
import '../../css/q/q4ak11eop.css';
import '../../css/b/brwecab9n.css';
import '../../css/z/zvrtnxx7a.css';
import '../../css/z/z75c3rolc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="yqmpubcny"/><path class="b43oy4bsa"/><rect class="x673ds65d"/><path class="svqfe56ut"/><path class="d4i60kc2p"/><path class="q4ak11eop"/><path class="brwecab9n"/><path class="zvrtnxx7a"/><path class="z75c3rolc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:crab"} {...others} />);
}

export default Component;
