import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xyjtgccot.css';
import '../../css/r/rcdynnveu.css';
import '../../css/s/s6ln3nt-q.css';
import '../../css/w/wih8zubfs.css';
import '../../css/v/vdkgxkbiy.css';
import '../../css/g/gh4e6ql1q.css';
import '../../css/c/cumuf_b1u.css';
import '../../css/m/myudn7jeq.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g class="xyjtgccot"><path class="rcdynnveu"/><path clip-rule="evenodd" class="s6ln3nt-q"/><path clip-rule="evenodd" class="wih8zubfs"/><path class="vdkgxkbiy"/><path clip-rule="evenodd" class="gh4e6ql1q"/></g><path clip-rule="evenodd" class="cumuf_b1u"/><path clip-rule="evenodd" class="myudn7jeq"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:monitor-loop-circle"} {...others} />);
}

export default Component;
