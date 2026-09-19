import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tim7-__5v.css';
import '../../css/h/hvywrpbbv.css';
import '../../css/d/dmo352x4a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="tim7-__5v"/><path class="hvywrpbbv"/><path clip-rule="evenodd" class="dmo352x4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:geriatrics-outline"} {...others} />);
}

export default Component;
