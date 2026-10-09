import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byse_4bgl.css';
import '../../css/j/j17_kebzo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="byse_4bgl"/><path class="j17_kebzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tablet-20-bold"} {...others} />);
}

export default Component;
