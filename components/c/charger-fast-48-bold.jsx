import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbi78gooe.css';
import '../../css/g/guzya4pfz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fbi78gooe"/><path class="guzya4pfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-fast-48-bold"} {...others} />);
}

export default Component;
