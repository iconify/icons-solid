import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htetqt6dv.css';
import '../../css/j/jfdl44b3i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="htetqt6dv"/><path class="jfdl44b3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:columns-48"} {...others} />);
}

export default Component;
