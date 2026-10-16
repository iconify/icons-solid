import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fc1420b7v.css';
import '../../css/t/tdu9i01lj.css';
import '../../css/o/onir-4bul.css';
import '../../css/m/mjlwt_b5d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fc1420b7v"/><path class="tdu9i01lj"/><path class="onir-4bul"/><path class="mjlwt_b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yaw-48-bold"} {...others} />);
}

export default Component;
