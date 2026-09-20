import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy76qwm9w.css';
import '../../css/e/e19_5uz2d.css';
import '../../css/e/e_qertnto.css';
import '../../css/y/yquwh0i5s.css';
import '../../css/y/yvgdpzb2e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dy76qwm9w"/><path class="e19_5uz2d"/><path class="e_qertnto"/><path class="yquwh0i5s"/><path class="yvgdpzb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:backhand-index-pointing-left-1"} {...others} />);
}

export default Component;
