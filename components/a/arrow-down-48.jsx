import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df1n7oboy.css';
import '../../css/d/dp3euwb4h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="df1n7oboy"/><path class="dp3euwb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-48"} {...others} />);
}

export default Component;
