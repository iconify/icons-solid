import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x32ukaqaa.css';
import '../../css/i/ivrs2fbio.css';
import '../../css/v/veyr_t3yf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x32ukaqaa"/><path class="ivrs2fbio"/><path class="veyr_t3yf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-line-48-bold"} {...others} />);
}

export default Component;
