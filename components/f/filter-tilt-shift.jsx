import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnb6xndjt.css';

const viewBox = {"width":432,"height":432};
const content = `<path class="rnb6xndjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:filter-tilt-shift"} {...others} />);
}

export default Component;
