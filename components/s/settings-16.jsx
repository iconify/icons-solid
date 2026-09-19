import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1evzmbgl.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/d/dybrcqbqj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGVOOhMRpu)" class="x1evzmbgl"/><defs><linearGradient id="SVGVOOhMRpu" x1="10.874" x2="4.166" y1="13.534" y2="3.086" gradientUnits="userSpaceOnUse"><stop class="tt8br1bqq"/><stop offset="1" class="dybrcqbqj"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:settings-16"} {...others} />);
}

export default Component;
