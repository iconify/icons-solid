import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p29qewj3b.css';
import '../../css/l/l8nc8mbmh.css';
import '../../css/p/pnwe4yxad.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p29qewj3b"/><path class="l8nc8mbmh"/><path class="pnwe4yxad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:freezing-rain-20-bold"} {...others} />);
}

export default Component;
