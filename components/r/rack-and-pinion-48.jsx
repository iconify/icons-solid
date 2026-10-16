import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj8ilnbfl.css';
import '../../css/t/t4mrhvxik.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nj8ilnbfl"/><path class="t4mrhvxik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rack-and-pinion-48"} {...others} />);
}

export default Component;
