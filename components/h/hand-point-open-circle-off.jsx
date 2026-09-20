import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rkb-z3ciw.css';
import '../../css/m/md5of4b_i.css';
import '../../css/m/mntpnjbkj.css';
import '../../css/p/pf1r0ibwe.css';
import '../../css/v/v-ap9dbqx.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rkb-z3ciw"/><path clip-rule="evenodd" class="md5of4b_i"/><path clip-rule="evenodd" class="mntpnjbkj"/><path clip-rule="evenodd" class="pf1r0ibwe"/><path clip-rule="evenodd" class="v-ap9dbqx"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:hand-point-open-circle-off"} {...others} />);
}

export default Component;
