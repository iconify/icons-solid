import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ns5zs0vev.css';
import '../../css/q/qdjmx6jro.css';
import '../../css/y/yaab6pb7b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ns5zs0vev"/><path class="qdjmx6jro"/><path class="yaab6pb7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-health-48-bold"} {...others} />);
}

export default Component;
