import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/b/bo-s9ccqp.css';
import '../../css/m/md6-m57lx.css';
import '../../css/x/xme927bga.css';
import '../../css/o/o7p8-3s9e.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="bo-s9ccqp"/><path clip-rule="evenodd" class="md6-m57lx"/><path class="xme927bga"/><path clip-rule="evenodd" class="o7p8-3s9e"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:music-note-single-circle-off"} {...others} />);
}

export default Component;
