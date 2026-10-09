import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjjddbshj.css';
import '../../css/f/flc82qukb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rjjddbshj"/><path class="flc82qukb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crop-48"} {...others} />);
}

export default Component;
