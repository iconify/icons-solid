import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbfsj092o.css';
import '../../css/j/jc99_77ng.css';
import '../../css/n/n994qc39b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kbfsj092o"/><path class="jc99_77ng"/><path class="n994qc39b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hourglass-48"} {...others} />);
}

export default Component;
