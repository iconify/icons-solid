import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c961mpvnt.css';
import '../../css/f/f_m6gmbzn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c961mpvnt"/><path class="f_m6gmbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:square-check-20"} {...others} />);
}

export default Component;
