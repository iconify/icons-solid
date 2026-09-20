import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/c/cbcj0xbvs.css';
import '../../css/i/irtz-mbtm.css';
import '../../css/b/b_tcflriy.css';
import '../../css/e/eyx4rub6w.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="cbcj0xbvs"/><path clip-rule="evenodd" class="irtz-mbtm"/><path clip-rule="evenodd" class="b_tcflriy"/><path class="eyx4rub6w"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:dress-circle-off"} {...others} />);
}

export default Component;
