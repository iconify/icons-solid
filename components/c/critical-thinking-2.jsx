import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0oaawbfg.css';
import '../../css/s/sig9rib-j.css';
import '../../css/a/ahiqj0-bl.css';
import '../../css/q/qoamk-b6q.css';
import '../../css/z/zhi_rranp.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="w0oaawbfg"/><path class="sig9rib-j"/><path class="ahiqj0-bl"/><path class="qoamk-b6q"/><path class="zhi_rranp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:critical-thinking-2"} {...others} />);
}

export default Component;
