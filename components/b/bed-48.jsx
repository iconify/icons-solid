import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftft7buul.css';
import '../../css/o/oanow-b1b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ftft7buul"/><path class="oanow-b1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bed-48"} {...others} />);
}

export default Component;
