import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6jd9_b7p.css';
import '../../css/b/bvgd0jb0c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j6jd9_b7p"/><path class="bvgd0jb0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crane-hook-20-bold"} {...others} />);
}

export default Component;
