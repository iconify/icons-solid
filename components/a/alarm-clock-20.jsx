import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbeq0b47x.css';
import '../../css/b/b40519b-w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fbeq0b47x"/><path class="b40519b-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:alarm-clock-20"} {...others} />);
}

export default Component;
