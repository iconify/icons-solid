import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4c47gkwc.css';
import '../../css/r/rvgwmpbdo.css';
import '../../css/x/xp27v-b4z.css';
import '../../css/r/r7-o3sbun.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r4c47gkwc"/><path class="rvgwmpbdo"/><path class="xp27v-b4z"/><path class="r7-o3sbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:onebuttonmouse"} {...others} />);
}

export default Component;
