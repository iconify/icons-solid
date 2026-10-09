import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm5htjbev.css';
import '../../css/u/u247rkkct.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tm5htjbev"/><path class="u247rkkct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electrolyser-20-bold"} {...others} />);
}

export default Component;
