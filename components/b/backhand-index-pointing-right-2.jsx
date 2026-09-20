import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5xm4351d.css';
import '../../css/y/ywvv8vm-y.css';
import '../../css/x/x0z7g8k7v.css';
import '../../css/y/y6lequ7jv.css';
import '../../css/y/yvgdpzb2e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w5xm4351d"/><path class="ywvv8vm-y"/><path class="x0z7g8k7v"/><path class="y6lequ7jv"/><path class="yvgdpzb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:backhand-index-pointing-right-2"} {...others} />);
}

export default Component;
