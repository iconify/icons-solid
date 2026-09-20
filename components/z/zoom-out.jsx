import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ry0q1bu3e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ry0q1bu3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:zoom-out"} {...others} />);
}

export default Component;
