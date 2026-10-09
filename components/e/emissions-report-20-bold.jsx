import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ny-w6qbwa.css';
import '../../css/p/pv7m710be.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ny-w6qbwa"/><path class="pv7m710be"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:emissions-report-20-bold"} {...others} />);
}

export default Component;
