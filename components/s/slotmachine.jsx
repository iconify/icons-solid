import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8ro0f3ah.css';
import '../../css/a/agmlxx2wx.css';
import '../../css/t/tu5_rjb8g.css';
import '../../css/t/twdij-obb.css';
import '../../css/e/erv34tb-n.css';
import '../../css/q/qap-1-b6k.css';
import '../../css/q/q5owinz-y.css';
import '../../css/y/ysw5kw6yp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n8ro0f3ah"/><path class="agmlxx2wx"/><path class="tu5_rjb8g"/><path class="twdij-obb"/><path class="erv34tb-n"/><path class="qap-1-b6k"/><path class="q5owinz-y"/><path class="ysw5kw6yp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:slotmachine"} {...others} />);
}

export default Component;
