import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y32oprfqe.css';
import '../../css/o/oquy5qb0l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y32oprfqe"/><path class="oquy5qb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-range-48"} {...others} />);
}

export default Component;
