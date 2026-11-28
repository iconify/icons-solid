import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4ts0redx.css';
import '../../css/l/lk33h77ev.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="e4ts0redx"/><path class="lk33h77ev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:shield-user-duotone"} {...others} />);
}

export default Component;
