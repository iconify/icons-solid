import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_wpq7bde.css';
import '../../css/n/nwbpqqb3d.css';
import '../../css/e/exnvyccnx.css';
import '../../css/l/l43k_nb0b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f_wpq7bde"/><path class="nwbpqqb3d"/><path class="exnvyccnx"/><path class="l43k_nb0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pylon-20"} {...others} />);
}

export default Component;
