import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhedj2bhl.css';
import '../../css/h/h-nm0vb_t.css';
import '../../css/i/ikay0tyrx.css';
import '../../css/j/jt5y90bql.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dhedj2bhl"/><path class="h-nm0vb_t"/><path class="ikay0tyrx"/><path class="jt5y90bql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:network-nodes-20-bold"} {...others} />);
}

export default Component;
