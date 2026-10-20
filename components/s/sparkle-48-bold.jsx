import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbnsb3bgj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fbnsb3bgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sparkle-48-bold"} {...others} />);
}

export default Component;
