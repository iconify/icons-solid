import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pycxs8orj.css';
import '../../css/x/xjuhbqb1b.css';
import '../../css/l/l3lpevbky.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pycxs8orj"/><path class="xjuhbqb1b"/><path class="l3lpevbky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-x-48"} {...others} />);
}

export default Component;
