import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t6y5t4bua.css';
import '../../css/k/k2vx3qbnw.css';
import '../../css/u/u16kknbeo.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="t6y5t4bua"/><path class="k2vx3qbnw"/><path class="u16kknbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:graph-pie"} {...others} />);
}

export default Component;
