import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ds3wm4rom.css';
import '../../css/o/oh4-_7byg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ds3wm4rom"/><path class="oh4-_7byg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-pin-off-20"} {...others} />);
}

export default Component;
