import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8x0ib4bs.css';
import '../../css/v/vjnfcfbjd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h8x0ib4bs"/><path class="vjnfcfbjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:redo-20-bold"} {...others} />);
}

export default Component;
