import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5-tgpcat.css';
import '../../css/a/a3mz8kb6e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y5-tgpcat"/><path class="a3mz8kb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hiking-20"} {...others} />);
}

export default Component;
