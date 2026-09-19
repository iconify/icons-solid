import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/g/gdvdupecv.css';
import '../../css/w/wxxx193iv.css';
import '../../css/o/ogpl226vk.css';

const viewBox = {"width":2000,"height":2000};
const content = `<g class="h01tyzbfu"><path class="gdvdupecv"/><path class="wxxx193iv"/><path class="ogpl226vk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:lasso-tool"} {...others} />);
}

export default Component;
