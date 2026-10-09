import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1mcems0k.css';
import '../../css/r/rtxe8yjtm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l1mcems0k"/><path class="rtxe8yjtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-thermometer-20-bold"} {...others} />);
}

export default Component;
