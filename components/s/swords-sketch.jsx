import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/utt4xvbom.css';
import '../../css/q/qat37oo-m.css';
import '../../css/a/anga10bot.css';
import '../../css/z/zrmw_bcdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="utt4xvbom wm-k"/><path class="qat37oo-m wm-a"/><path class="anga10bot wm-k"/><path class="wm-a zrmw_bcdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:swords-sketch"} {...others} />);
}

export default Component;
