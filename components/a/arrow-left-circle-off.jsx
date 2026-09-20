import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/p/pr0chacef.css';
import '../../css/x/xdoq7sbjf.css';
import '../../css/n/nwqam6bev.css';
import '../../css/m/mack1jpym.css';
import '../../css/b/bix5dccyb.css';
import '../../css/u/ue-8cqbhf.css';
import '../../css/w/wsd75ceda.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><g clip-rule="evenodd" class="pr0chacef"><path class="xdoq7sbjf"/><path class="nwqam6bev"/><path class="mack1jpym"/></g><path clip-rule="evenodd" class="bix5dccyb"/><path clip-rule="evenodd" class="ue-8cqbhf"/><path clip-rule="evenodd" class="wsd75ceda"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-left-circle-off"} {...others} />);
}

export default Component;
