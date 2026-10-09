import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r69m8kafb.css';
import '../../css/s/sfcgwqbcz.css';
import '../../css/s/sps9e7jfu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r69m8kafb"/><path class="sfcgwqbcz"/><path class="sps9e7jfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-clock-48"} {...others} />);
}

export default Component;
