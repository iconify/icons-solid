import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb1oskbsf.css';
import '../../css/e/eu4b83byw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mb1oskbsf"/><path class="eu4b83byw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crosshair-20"} {...others} />);
}

export default Component;
