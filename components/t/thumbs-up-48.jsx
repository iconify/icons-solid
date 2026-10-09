import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppm3_br9v.css';
import '../../css/r/rh3ta1ono.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ppm3_br9v"/><path class="rh3ta1ono"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thumbs-up-48"} {...others} />);
}

export default Component;
