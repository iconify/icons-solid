import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/w/wzs6vebfd.css';
import '../../css/c/c264sdboh.css';
import '../../css/k/k3lungbac.css';
import '../../css/q/q0162te-o.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="wzs6vebfd"/><path class="c264sdboh"/><path class="k3lungbac"/><path class="q0162te-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:slate"} {...others} />);
}

export default Component;
