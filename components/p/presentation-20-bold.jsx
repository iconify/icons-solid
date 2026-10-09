import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_j6v7gna.css';
import '../../css/c/cbr70bcko.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k_j6v7gna"/><path class="cbr70bcko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:presentation-20-bold"} {...others} />);
}

export default Component;
