import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd10_3lgv.css';
import '../../css/c/czm4jwrva.css';
import '../../css/j/jih-r1b_t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fd10_3lgv"/><path class="czm4jwrva"/><path class="jih-r1b_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:webcam-48"} {...others} />);
}

export default Component;
