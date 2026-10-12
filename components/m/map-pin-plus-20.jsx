import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6ztyxb8m.css';
import '../../css/y/yswetvbum.css';
import '../../css/y/y4i3220kc.css';
import '../../css/z/zkdyo_ief.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e6ztyxb8m"/><path class="yswetvbum"/><path class="y4i3220kc"/><path class="zkdyo_ief"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-pin-plus-20"} {...others} />);
}

export default Component;
