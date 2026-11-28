import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sulhnkb0p.css';
import '../../css/a/apzxh7b1f.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="sulhnkb0p"/><path class="apzxh7b1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:layout-dashboard-duotone"} {...others} />);
}

export default Component;
