import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/p/pr0chacef.css';
import '../../css/v/v5li91eow.css';
import '../../css/v/vwgcxs7ci.css';
import '../../css/k/k0utymb6g.css';
import '../../css/x/xc59i5bri.css';
import '../../css/d/dytyt2ibl.css';
import '../../css/t/tuthbmb5a.css';
import '../../css/c/chnk-g9lg.css';
import '../../css/y/youv8-beu.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g clip-rule="evenodd" class="pr0chacef"><path class="v5li91eow"/><path class="vwgcxs7ci"/><path class="k0utymb6g"/><path class="xc59i5bri"/></g><path clip-rule="evenodd" class="dytyt2ibl"/><path clip-rule="evenodd" class="tuthbmb5a"/><path clip-rule="evenodd" class="chnk-g9lg"/><path clip-rule="evenodd" class="youv8-beu"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:yuan-circle-off"} {...others} />);
}

export default Component;
