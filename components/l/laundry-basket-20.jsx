import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7-lm4bvk.css';
import '../../css/z/zjq3s2ihz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c7-lm4bvk"/><path class="zjq3s2ihz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:laundry-basket-20"} {...others} />);
}

export default Component;
