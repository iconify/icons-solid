import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/x/xa34w7bwr.css';
import '../../css/i/i_r1_acgo.css';
import '../../css/c/chz07ibxv.css';
import '../../css/o/oeulkf_kp.css';
import '../../css/o/ozv6h8gfo.css';
import '../../css/b/b2tngprxw.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path clip-rule="evenodd" class="xa34w7bwr"/><path clip-rule="evenodd" class="i_r1_acgo"/><path class="chz07ibxv"/><path clip-rule="evenodd" class="oeulkf_kp"/><path class="ozv6h8gfo"/><path class="b2tngprxw"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:bicycle-circle-off"} {...others} />);
}

export default Component;
