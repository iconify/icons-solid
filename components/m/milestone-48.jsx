import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slkapwbis.css';
import '../../css/t/tb36haboa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="slkapwbis"/><path class="tb36haboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:milestone-48"} {...others} />);
}

export default Component;
