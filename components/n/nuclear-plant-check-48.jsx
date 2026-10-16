import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8mzgiwjz.css';
import '../../css/w/w43qocbxc.css';
import '../../css/d/d7ab7wboi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u8mzgiwjz"/><path class="w43qocbxc"/><path class="d7ab7wboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nuclear-plant-check-48"} {...others} />);
}

export default Component;
