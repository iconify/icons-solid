import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i50lbdzkp.css';
import '../../css/k/kulakgbcg.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i50lbdzkp"/><path class="kulakgbcg"/><path class="hwjgqrbah"/><path class="ygtv74bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electrolyser-alert-48-bold"} {...others} />);
}

export default Component;
