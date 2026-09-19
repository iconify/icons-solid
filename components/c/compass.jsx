import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx-u4-b1h.css';
import '../../css/w/wezgfpbuq.css';
import '../../css/a/apw126bpr.css';
import '../../css/h/h5xed7b5b.css';
import '../../css/q/qug1sskqj.css';
import '../../css/y/yzx872mee.css';
import '../../css/m/mdapc0r7d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="lx-u4-b1h"/><path class="wezgfpbuq"/><path class="apw126bpr"/><path class="h5xed7b5b"/><path class="qug1sskqj"/><path class="yzx872mee"/><path class="mdapc0r7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:compass"} {...others} />);
}

export default Component;
