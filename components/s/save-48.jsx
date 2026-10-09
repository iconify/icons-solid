import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7_yqvbof.css';
import '../../css/v/vf15g1hye.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="x7_yqvbof"/><path class="vf15g1hye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:save-48"} {...others} />);
}

export default Component;
