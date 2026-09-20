import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/w/wp-lbwbqz.css';
import '../../css/o/o59z9_b3i.css';
import '../../css/d/d3upv268i.css';
import '../../css/t/t3vjaccoe.css';

const viewBox = {"width":41,"height":41,"left":-0.5};
const content = `<g class="umm606kxf"><path class="wp-lbwbqz"/><path class="o59z9_b3i"/><path class="d3upv268i"/><path class="t3vjaccoe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:school"} {...others} />);
}

export default Component;
