import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0t5o3l-d.css';
import '../../css/k/k4k55lxkj.css';
import '../../css/v/vl7jw2b8c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f0t5o3l-d"/><path class="k4k55lxkj"/><path class="vl7jw2b8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cube-20"} {...others} />);
}

export default Component;
