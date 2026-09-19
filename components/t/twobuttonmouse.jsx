import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4c47gkwc.css';
import '../../css/r/rvgwmpbdo.css';
import '../../css/r/r7-o3sbun.css';
import '../../css/t/t6toq3b8x.css';
import '../../css/p/paa_rebkv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r4c47gkwc"/><path class="rvgwmpbdo"/><path class="r7-o3sbun"/><path class="t6toq3b8x"/><path class="paa_rebkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:twobuttonmouse"} {...others} />);
}

export default Component;
