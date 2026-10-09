import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ig5ltob0l.css';
import '../../css/l/lv4xmac5c.css';
import '../../css/y/yik1_41pi.css';
import '../../css/f/fizs-zcuf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ig5ltob0l"/><path class="lv4xmac5c"/><path class="yik1_41pi"/><path class="fizs-zcuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scales-48"} {...others} />);
}

export default Component;
