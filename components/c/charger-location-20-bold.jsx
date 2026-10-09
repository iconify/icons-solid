import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s--xkeuto.css';
import '../../css/j/j4u5ysbzr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s--xkeuto"/><path class="j4u5ysbzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-location-20-bold"} {...others} />);
}

export default Component;
