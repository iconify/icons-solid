import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/heffgq87f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="heffgq87f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charging-lane-48-bold"} {...others} />);
}

export default Component;
