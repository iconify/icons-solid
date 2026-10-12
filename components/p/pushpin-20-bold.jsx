import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktghhy0et.css';
import '../../css/e/ept6rpbfu.css';
import '../../css/g/ga3wfsbxu.css';
import '../../css/v/vz2ceoucx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ktghhy0et"/><path class="ept6rpbfu"/><path class="ga3wfsbxu"/><path class="vz2ceoucx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pushpin-20-bold"} {...others} />);
}

export default Component;
