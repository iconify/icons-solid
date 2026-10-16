import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5ew6wg8k.css';
import '../../css/c/clhq3_b4k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u5ew6wg8k"/><path class="clhq3_b4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-constraint-48-bold"} {...others} />);
}

export default Component;
