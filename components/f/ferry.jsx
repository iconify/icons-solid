import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g6db4obxx.css';
import '../../css/k/krz5z9cll.css';
import '../../css/q/qw_ojibel.css';
import '../../css/w/wapbuubam.css';
import '../../css/m/m00g3lbbv.css';
import '../../css/z/zh0dsbbaz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="g6db4obxx"/><path class="krz5z9cll"/><path class="qw_ojibel"/><path class="wapbuubam"/><path class="m00g3lbbv"/><path class="zh0dsbbaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ferry"} {...others} />);
}

export default Component;
