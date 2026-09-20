import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/f/finz40bxj.css';
import '../../css/w/w9t7yvv_q.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="finz40bxj"/><path class="w9t7yvv_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:sun"} {...others} />);
}

export default Component;
