import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zsb2-hb_n.css';
import '../../css/r/r56804bvh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zsb2-hb_n"/><path class="r56804bvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ladder-20-bold"} {...others} />);
}

export default Component;
