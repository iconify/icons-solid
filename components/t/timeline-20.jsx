import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev66c6l-q.css';
import '../../css/u/u9pwpyefj.css';
import '../../css/s/sw5c5ob3p.css';
import '../../css/d/ddnl6t2zw.css';
import '../../css/j/jvrzg1bub.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ev66c6l-q"/><path class="u9pwpyefj"/><path class="sw5c5ob3p"/><path class="ddnl6t2zw"/><path class="jvrzg1bub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:timeline-20"} {...others} />);
}

export default Component;
