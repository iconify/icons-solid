import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it1t7rbgl.css';
import '../../css/q/q4xrfybks.css';
import '../../css/w/wj41wcbwv.css';
import '../../css/b/btuq2abvy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="it1t7rbgl"/><path class="q4xrfybks"/><path class="wj41wcbwv"/><path class="btuq2abvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:weather-vane-48-bold"} {...others} />);
}

export default Component;
