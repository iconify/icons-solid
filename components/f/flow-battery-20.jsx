import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2tojgbsp.css';
import '../../css/z/z8jy6p5aj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n2tojgbsp"/><path class="z8jy6p5aj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flow-battery-20"} {...others} />);
}

export default Component;
