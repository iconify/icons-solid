import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jixfx1hdh.css';
import '../../css/r/ra1vsdwoa.css';
import '../../css/e/ep6j9gigt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jixfx1hdh"/><path class="ra1vsdwoa"/><path class="ep6j9gigt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flower-20"} {...others} />);
}

export default Component;
