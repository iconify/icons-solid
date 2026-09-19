import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4s2ozb3b.css';
import '../../css/m/mxet0mb0h.css';
import '../../css/x/xg6mc2bsh.css';
import '../../css/o/ok76dmb-q.css';
import '../../css/q/q2ragshzl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s4s2ozb3b"/><path class="mxet0mb0h"/><path class="xg6mc2bsh"/><path class="ok76dmb-q"/><path class="q2ragshzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:trumpet"} {...others} />);
}

export default Component;
