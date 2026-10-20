import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdnq6pbqs.css';
import '../../css/i/i4drks1lj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fdnq6pbqs"/><path class="i4drks1lj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-color-48"} {...others} />);
}

export default Component;
