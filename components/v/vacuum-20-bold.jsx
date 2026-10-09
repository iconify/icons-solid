import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8gpsn7-o.css';
import '../../css/n/nbr-frb3w.css';
import '../../css/c/cs47l5nhg.css';
import '../../css/d/dpbszfs_x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r8gpsn7-o"/><path class="nbr-frb3w"/><path class="cs47l5nhg"/><path class="dpbszfs_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:vacuum-20-bold"} {...others} />);
}

export default Component;
