import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1p3t8x8f.css';
import '../../css/q/q4nd00s6q.css';
import '../../css/q/qebsuebvl.css';
import '../../css/s/s6dbbpgpf.css';
import '../../css/m/mo7fv8bll.css';
import '../../css/e/el-ar7bpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n1p3t8x8f"/><path class="q4nd00s6q"/><path class="qebsuebvl"/><path clip-rule="evenodd" class="s6dbbpgpf"/><path class="mo7fv8bll"/><path class="el-ar7bpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-two-rounded-outline"} {...others} />);
}

export default Component;
