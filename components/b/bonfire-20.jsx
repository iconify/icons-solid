import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjvohhboi.css';
import '../../css/w/wrlhybbrv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tjvohhboi"/><path class="wrlhybbrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bonfire-20"} {...others} />);
}

export default Component;
