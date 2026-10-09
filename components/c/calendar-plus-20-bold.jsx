import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7qx85bwi.css';
import '../../css/n/nrnabgmon.css';
import '../../css/l/lfyak8xiv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g7qx85bwi"/><path class="nrnabgmon"/><path class="lfyak8xiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-plus-20-bold"} {...others} />);
}

export default Component;
