import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4r3ojbrq.css';
import '../../css/c/ccfx0hgsj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g4r3ojbrq"/><path class="ccfx0hgsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bus-20"} {...others} />);
}

export default Component;
