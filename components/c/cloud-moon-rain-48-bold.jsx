import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njwg_cbtx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="njwg_cbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-moon-rain-48-bold"} {...others} />);
}

export default Component;
