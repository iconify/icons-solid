import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og5fw-c9e.css';
import '../../css/b/b16yxabjp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="og5fw-c9e"/><path class="b16yxabjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:traffic-light-20-bold"} {...others} />);
}

export default Component;
