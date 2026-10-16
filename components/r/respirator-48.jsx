import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1w3r8bvp.css';
import '../../css/j/je2jee5cl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z1w3r8bvp"/><path class="je2jee5cl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:respirator-48"} {...others} />);
}

export default Component;
