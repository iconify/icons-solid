import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jri9a6k_o.css';
import '../../css/g/g_sporhjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jri9a6k_o"/><path class="g_sporhjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:atom"} {...others} />);
}

export default Component;
