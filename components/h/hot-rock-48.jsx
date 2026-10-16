import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rh3rjqrag.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rh3rjqrag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-rock-48"} {...others} />);
}

export default Component;
