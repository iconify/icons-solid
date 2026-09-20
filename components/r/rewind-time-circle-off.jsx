import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/q/q9hxb2v7m.css';
import '../../css/n/nog6nmbic.css';
import '../../css/q/q2yz2wsma.css';
import '../../css/g/g8oomib_p.css';
import '../../css/h/hbrzvn0gg.css';
import '../../css/i/i192p0nij.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="q9hxb2v7m"/><path clip-rule="evenodd" class="nog6nmbic"/></g><path clip-rule="evenodd" class="q2yz2wsma"/><path clip-rule="evenodd" class="g8oomib_p"/><path clip-rule="evenodd" class="hbrzvn0gg"/><path clip-rule="evenodd" class="i192p0nij"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:rewind-time-circle-off"} {...others} />);
}

export default Component;
