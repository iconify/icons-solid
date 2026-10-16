import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw2ccwbeu.css';
import '../../css/e/eyxhlubzl.css';
import '../../css/o/o25la7b3q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xw2ccwbeu"/><path class="eyxhlubzl"/><path class="o25la7b3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-off-48"} {...others} />);
}

export default Component;
