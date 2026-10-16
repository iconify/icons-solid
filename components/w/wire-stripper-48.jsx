import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgre77bfz.css';
import '../../css/p/pk8m0abcd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cgre77bfz"/><path class="pk8m0abcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wire-stripper-48"} {...others} />);
}

export default Component;
