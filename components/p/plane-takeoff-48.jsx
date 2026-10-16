import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/op0q6vcgg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="op0q6vcgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plane-takeoff-48"} {...others} />);
}

export default Component;
