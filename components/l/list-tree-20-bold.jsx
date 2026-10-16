import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxj2d1b_f.css';
import '../../css/n/nmhn6wb1y.css';
import '../../css/y/ycfhepb6n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fxj2d1b_f"/><path class="nmhn6wb1y"/><path class="ycfhepb6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:list-tree-20-bold"} {...others} />);
}

export default Component;
