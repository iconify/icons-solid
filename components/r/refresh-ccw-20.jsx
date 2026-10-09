import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rujg4eaav.css';
import '../../css/q/qrumt6bsf.css';
import '../../css/z/z0tcujbqr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rujg4eaav"/><path class="qrumt6bsf"/><path class="z0tcujbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refresh-ccw-20"} {...others} />);
}

export default Component;
