import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/p2sajfbyc.css';
import '../../css/x/xpmrkj0xx.css';
import '../../css/k/k2l7rvb9u.css';
import '../../css/z/z8ggteb9n.css';
import '../../css/l/ldt05ie4o.css';
import '../../css/o/oc8hw0bfs.css';
import '../../css/c/cce6sugsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="p2sajfbyc"/><path class="xpmrkj0xx"/><path class="k2l7rvb9u wm-shine"/><path class="z8ggteb9n"/><path class="ldt05ie4o"/><path class="oc8hw0bfs"/><path class="cce6sugsl wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bookmark"} {...others} />);
}

export default Component;
