import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksw885bgi.css';
import '../../css/y/y9k-0kbbo.css';
import '../../css/b/bjpij3b_x.css';
import '../../css/y/yquwh0i5s.css';
import '../../css/y/yvgdpzb2e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ksw885bgi"/><path class="y9k-0kbbo"/><path class="bjpij3b_x"/><path class="yquwh0i5s"/><path class="yvgdpzb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:backhand-index-pointing-left-2"} {...others} />);
}

export default Component;
