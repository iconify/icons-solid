import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1c9zmbsp.css';
import '../../css/s/scp3oyb1s.css';
import '../../css/t/tp54fz-fo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f1c9zmbsp"/><path class="scp3oyb1s"/><path class="tp54fz-fo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-up-20-bold"} {...others} />);
}

export default Component;
