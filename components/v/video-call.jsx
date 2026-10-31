import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uzkjk6bth.css';
import '../../css/y/yzpq66bij.css';
import '../../css/h/hq4mt9hro.css';
import '../../css/t/ti7s0kwlh.css';
import '../../css/p/p__j-35by.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="uzkjk6bth"/><path class="yzpq66bij"/><path class="hq4mt9hro wm-shine"/><path class="ti7s0kwlh wm-k"/><path class="p__j-35by wm-a"/><path class="w49ngccqq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:video-call"} {...others} />);
}

export default Component;
