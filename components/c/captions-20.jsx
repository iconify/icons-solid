import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4l8cxbpg.css';
import '../../css/h/hxs084q0t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t4l8cxbpg"/><path class="hxs084q0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:captions-20"} {...others} />);
}

export default Component;
