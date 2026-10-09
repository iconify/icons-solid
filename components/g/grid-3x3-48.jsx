import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htetqt6dv.css';
import '../../css/w/w54w-fbij.css';
import '../../css/s/sivybx15u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="htetqt6dv"/><path class="w54w-fbij"/><path class="sivybx15u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-3x3-48"} {...others} />);
}

export default Component;
