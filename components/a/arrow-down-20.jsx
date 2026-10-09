import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lfzmnvd-w.css';
import '../../css/y/yo9tbkbdz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lfzmnvd-w"/><path class="yo9tbkbdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-20"} {...others} />);
}

export default Component;
