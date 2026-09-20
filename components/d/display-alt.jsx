import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2sxbmu3h.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="e2sxbmu3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:display-alt"} {...others} />);
}

export default Component;
