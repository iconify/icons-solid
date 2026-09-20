import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/x/xjx4f-bpr.css';
import '../../css/v/vvyfu0ezf.css';
import '../../css/n/ngkxng18h.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="xjx4f-bpr"/><path class="vvyfu0ezf"/><path class="ngkxng18h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:eiffel-tower"} {...others} />);
}

export default Component;
