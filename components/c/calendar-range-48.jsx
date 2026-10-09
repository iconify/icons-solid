import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pycxs8orj.css';
import '../../css/o/oy7flk86j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pycxs8orj"/><path class="oy7flk86j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-range-48"} {...others} />);
}

export default Component;
