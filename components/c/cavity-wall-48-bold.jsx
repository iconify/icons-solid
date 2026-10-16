import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dcllyhbok.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dcllyhbok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cavity-wall-48-bold"} {...others} />);
}

export default Component;
