import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bh0-6objo.css';
import '../../css/u/u5hzo-bsp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bh0-6objo"/><path class="u5hzo-bsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:green-jobs-20-bold"} {...others} />);
}

export default Component;
