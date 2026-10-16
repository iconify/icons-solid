import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvhip5cnc.css';
import '../../css/e/e604b0bcg.css';
import '../../css/v/v6urtjbrm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kvhip5cnc"/><path class="e604b0bcg"/><path class="v6urtjbrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:recloser-20"} {...others} />);
}

export default Component;
