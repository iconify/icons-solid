import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uw5ycab-f.css';
import '../../css/o/otkch_brn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uw5ycab-f"/><path class="otkch_brn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:city-skyline-48-bold"} {...others} />);
}

export default Component;
