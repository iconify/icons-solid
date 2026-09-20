import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/e/ejpodu-yl.css';
import '../../css/f/fe9c08b2k.css';
import '../../css/n/nvb_pl6dd.css';
import '../../css/w/w406fr8pw.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/r/r8_-qqbms.css';
import '../../css/q/qzpdskzfr.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wj4kgr0on"><path class="ejpodu-yl"/><path class="fe9c08b2k"/><ellipse transform="rotate(-40.754 25.04 23.504)" class="nvb_pl6dd"/><path class="w406fr8pw"/></g><g class="brzn_0bpr"><path class="r8_-qqbms"/><path class="qzpdskzfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:brown-mushroom"} {...others} />);
}

export default Component;
