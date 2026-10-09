import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht0kv9akh.css';
import '../../css/x/xl70_ubev.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ht0kv9akh"/><path class="xl70_ubev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rotate-cw-20"} {...others} />);
}

export default Component;
