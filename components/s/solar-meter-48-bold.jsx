import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvxin6bpa.css';
import '../../css/d/dnwij0b-f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rvxin6bpa"/><path class="dnwij0b-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-meter-48-bold"} {...others} />);
}

export default Component;
