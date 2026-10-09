import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkpyk6brm.css';
import '../../css/f/f61frvbiv.css';
import '../../css/l/lknw7jshi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rkpyk6brm"/><path class="f61frvbiv"/><path class="lknw7jshi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geothermal-plant-48-bold"} {...others} />);
}

export default Component;
