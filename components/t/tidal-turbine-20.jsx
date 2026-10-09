import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbbf18bwz.css';
import '../../css/b/b_eke94bd.css';
import '../../css/p/p415zm30i.css';
import '../../css/p/pt38gvb4c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rbbf18bwz"/><path class="b_eke94bd"/><path class="p415zm30i"/><path class="pt38gvb4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tidal-turbine-20"} {...others} />);
}

export default Component;
