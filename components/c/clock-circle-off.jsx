import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/psv_8pbss.css';
import '../../css/i/ibcfl__oe.css';
import '../../css/x/x1ey9o01v.css';
import '../../css/s/soxz570-n.css';
import '../../css/l/lsdkvgbbl.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="psv_8pbss"/><path class="ibcfl__oe"/><path clip-rule="evenodd" class="x1ey9o01v"/><path clip-rule="evenodd" class="soxz570-n"/><path clip-rule="evenodd" class="lsdkvgbbl"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:clock-circle-off"} {...others} />);
}

export default Component;
