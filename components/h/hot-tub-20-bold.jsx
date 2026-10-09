import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxtlryb9c.css';
import '../../css/c/cc-mqixje.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rxtlryb9c"/><path class="cc-mqixje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-tub-20-bold"} {...others} />);
}

export default Component;
