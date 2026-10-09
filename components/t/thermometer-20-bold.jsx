import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbl6phbau.css';
import '../../css/o/ostwlt0as.css';
import '../../css/g/gh3kikb4e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rbl6phbau"/><path class="ostwlt0as"/><path class="gh3kikb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-20-bold"} {...others} />);
}

export default Component;
