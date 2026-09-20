import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/p/ppvzc67sj.css';
import '../../css/e/e_bje1obp.css';
import '../../css/c/c1wl5zbeo.css';
import '../../css/y/ynugfubjg.css';
import '../../css/l/lu9i-ebuv.css';
import '../../css/s/s7nvg2bgy.css';
import '../../css/c/c43si38_z.css';
import '../../css/t/t3ma1fl0r.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path class="ppvzc67sj"/><path clip-rule="evenodd" class="e_bje1obp"/><path clip-rule="evenodd" class="c1wl5zbeo"/><path clip-rule="evenodd" class="ynugfubjg"/><path class="lu9i-ebuv"/><path clip-rule="evenodd" class="s7nvg2bgy"/><path class="c43si38_z"/><path clip-rule="evenodd" class="t3ma1fl0r"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:alarm-circle-off"} {...others} />);
}

export default Component;
