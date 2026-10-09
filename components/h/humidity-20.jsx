import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8cq105ge.css';
import '../../css/r/r7j0j19px.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j8cq105ge"/><path class="r7j0j19px"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:humidity-20"} {...others} />);
}

export default Component;
