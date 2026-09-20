import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/p/pr0chacef.css';
import '../../css/r/r_uy20bmg.css';
import '../../css/f/f3dvmbchy.css';
import '../../css/z/z_d_qqbvd.css';
import '../../css/n/ns1gl4fqi.css';
import '../../css/c/cw0z9sbge.css';
import '../../css/j/jvuqbdbej.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g clip-rule="evenodd" class="pr0chacef"><path class="r_uy20bmg"/><path class="f3dvmbchy"/><path class="z_d_qqbvd"/></g><path clip-rule="evenodd" class="ns1gl4fqi"/><path clip-rule="evenodd" class="cw0z9sbge"/><path clip-rule="evenodd" class="jvuqbdbej"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-right-circle-off"} {...others} />);
}

export default Component;
