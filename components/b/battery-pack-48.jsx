import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-kp5908v.css';
import '../../css/x/xhbmkr9uj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l-kp5908v"/><path class="xhbmkr9uj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-pack-48"} {...others} />);
}

export default Component;
