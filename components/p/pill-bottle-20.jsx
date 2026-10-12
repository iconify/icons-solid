import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0g24_-dr.css';
import '../../css/n/nodo6_-it.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s0g24_-dr"/><path class="nodo6_-it"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pill-bottle-20"} {...others} />);
}

export default Component;
