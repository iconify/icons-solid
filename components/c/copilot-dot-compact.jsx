import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dsq17kvgv.css';
import '../../css/l/lvzj-jbyy.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dsq17kvgv"/><path class="lvzj-jbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:copilot-dot-compact"} {...others} />);
}

export default Component;
