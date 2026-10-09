import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqhdcmbrc.css';
import '../../css/a/aemqdzbdk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oqhdcmbrc"/><path class="aemqdzbdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-pin-off-20-bold"} {...others} />);
}

export default Component;
