import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl9ati6se.css';
import '../../css/q/qfi21qbwi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jl9ati6se"/><path class="qfi21qbwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hanger-48-bold"} {...others} />);
}

export default Component;
