import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqiw94bsr.css';
import '../../css/t/t-4am071a.css';
import '../../css/h/h7je_ubfe.css';
import '../../css/h/hx15zqp6f.css';
import '../../css/n/nckffrb0r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yqiw94bsr"/><path clip-rule="evenodd" class="t-4am071a"/><path class="h7je_ubfe"/><path class="hx15zqp6f"/><path class="nckffrb0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:notification-message-alert"} {...others} />);
}

export default Component;
