import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rgoan7bpx.css';
import '../../css/u/us-phubsg.css';
import '../../css/h/hjlmgab0d.css';
import '../../css/d/dwdszko0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="rgoan7bpx"/><path class="us-phubsg"/><path class="hjlmgab0d"/><path class="dwdszko0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:user-plus"} {...others} />);
}

export default Component;
