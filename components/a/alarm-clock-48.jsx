import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk88l0bcp.css';
import '../../css/o/o3m77ebsl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yk88l0bcp"/><path class="o3m77ebsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alarm-clock-48"} {...others} />);
}

export default Component;
