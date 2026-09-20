import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/a/ab6liccyo.css';
import '../../css/d/d-79jbeyd.css';
import '../../css/p/pj24n-bxf.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="ab6liccyo"/><path class="d-79jbeyd"/><path class="pj24n-bxf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:graph-bar"} {...others} />);
}

export default Component;
