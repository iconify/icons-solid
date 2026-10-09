import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy28lqjna.css';
import '../../css/w/w4536acmd.css';
import '../../css/b/bnh_1x4bj.css';
import '../../css/g/gieo_eh2m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iy28lqjna"/><path class="w4536acmd"/><path class="bnh_1x4bj"/><path class="gieo_eh2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sim-card-48"} {...others} />);
}

export default Component;
