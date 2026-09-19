import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v8z010bwq.css';
import '../../css/k/kpp0gibyb.css';
import '../../css/u/uxu_holod.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><path class="v8z010bwq"/><path class="kpp0gibyb"/><path clip-rule="evenodd" class="uxu_holod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:collapse-all-compact"} {...others} />);
}

export default Component;
