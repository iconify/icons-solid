import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-dszwbqw.css';
import '../../css/s/sc5zoti7t.css';
import '../../css/t/t3c7rx_mz.css';
import '../../css/g/gp6en2bhq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f-dszwbqw"/><path class="sc5zoti7t"/><path class="t3c7rx_mz"/><path class="gp6en2bhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ball-valve-20"} {...others} />);
}

export default Component;
