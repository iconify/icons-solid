import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wssriqbjc.css';
import '../../css/y/yvphjmmpy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wssriqbjc"/><path class="yvphjmmpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:earthquake-20"} {...others} />);
}

export default Component;
