import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q70ah7b4t.css';
import '../../css/m/m6puvkbwi.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/l/l9jgh7bvz.css';
import '../../css/s/st45emjbc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q70ah7b4t"/><path class="m6puvkbwi"/><path class="hwjgqrbah"/><path class="l9jgh7bvz"/><path class="st45emjbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:car-plus-48-bold"} {...others} />);
}

export default Component;
