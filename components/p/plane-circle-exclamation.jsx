import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hl6ttu2ij.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="hl6ttu2ij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:plane-circle-exclamation"} {...others} />);
}

export default Component;
