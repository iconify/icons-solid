import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uklt71bum.css';
import '../../css/o/okvl3ohva.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uklt71bum"/><path class="okvl3ohva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dry-cask-48"} {...others} />);
}

export default Component;
