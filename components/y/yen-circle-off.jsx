import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/p/pr0chacef.css';
import '../../css/o/oujthqbpg.css';
import '../../css/n/n85h__qgv.css';
import '../../css/o/olib42bvf.css';
import '../../css/h/hoixn62ck.css';
import '../../css/v/vvredbs8j.css';
import '../../css/l/lnjmelzpu.css';
import '../../css/s/s-y6vgbvz.css';
import '../../css/h/h3qpe_b5d.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g clip-rule="evenodd" class="pr0chacef"><path class="oujthqbpg"/><path class="n85h__qgv"/><path class="olib42bvf"/><path class="hoixn62ck"/></g><path clip-rule="evenodd" class="vvredbs8j"/><path clip-rule="evenodd" class="lnjmelzpu"/><path clip-rule="evenodd" class="s-y6vgbvz"/><path clip-rule="evenodd" class="h3qpe_b5d"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:yen-circle-off"} {...others} />);
}

export default Component;
