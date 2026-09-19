import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a5jk6dbbu.css';
import '../../css/j/j2pvncbsc.css';
import '../../css/d/dccq6ab0m.css';
import '../../css/d/d5irr9b4n.css';
import '../../css/o/oiyg43gjv.css';
import '../../css/q/qwsvonx7e.css';
import '../../css/u/uaq5t2bau.css';
import '../../css/z/zc6-w3vfw.css';
import '../../css/r/rld1n7b2w.css';
import '../../css/z/zw9076byi.css';
import '../../css/l/lbvn7kb5g.css';
import '../../css/v/vkfaxe_2q.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="cuyn6tgcc"><path class="a5jk6dbbu"/><path class="j2pvncbsc"/><path class="dccq6ab0m"/><path class="d5irr9b4n"/><path class="oiyg43gjv"/><path class="qwsvonx7e"/><path class="uaq5t2bau"/><path class="zc6-w3vfw"/><path class="rld1n7b2w"/><path class="zw9076byi"/><path class="lbvn7kb5g"/><path class="vkfaxe_2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:zig-wordmark"} {...others} />);
}

export default Component;
