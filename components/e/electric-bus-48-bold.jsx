import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5pdqgm9m.css';
import '../../css/c/ctik4kd5n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f5pdqgm9m"/><path class="ctik4kd5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-bus-48-bold"} {...others} />);
}

export default Component;
