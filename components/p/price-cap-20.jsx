import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km2fl-ght.css';
import '../../css/v/v-6vjfmba.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="km2fl-ght"/><path class="v-6vjfmba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:price-cap-20"} {...others} />);
}

export default Component;
