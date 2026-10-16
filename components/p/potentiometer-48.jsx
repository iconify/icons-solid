import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5ss8-b2m.css';
import '../../css/l/l1epn2jfk.css';
import '../../css/m/m82nk1bgk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f5ss8-b2m"/><path class="l1epn2jfk"/><path class="m82nk1bgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:potentiometer-48"} {...others} />);
}

export default Component;
