import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2cwbgbog.css';
import '../../css/m/mqzn7v0fm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i2cwbgbog"/><path class="mqzn7v0fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:seabed-survey-20-bold"} {...others} />);
}

export default Component;
