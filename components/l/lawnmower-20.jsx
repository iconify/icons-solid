import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5t6ee0li.css';
import '../../css/c/c68i7abad.css';
import '../../css/v/vbv9yn3af.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a5t6ee0li"/><path class="c68i7abad"/><path class="vbv9yn3af"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lawnmower-20"} {...others} />);
}

export default Component;
