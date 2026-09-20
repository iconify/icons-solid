import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/t/tqk_3w0ab.css';
import '../../css/m/mlts5vbjj.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="tqk_3w0ab"/><path class="mlts5vbjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:bluetooth"} {...others} />);
}

export default Component;
