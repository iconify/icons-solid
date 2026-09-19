import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ei-fevb0d.css';
import '../../css/g/gefsnvbmp.css';
import '../../css/q/qx32elbez.css';
import '../../css/d/dlkwv-bom.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="ei-fevb0d"/><path class="gefsnvbmp"/><path class="mr-st1 qx32elbez"/><path class="dlkwv-bom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mr-4x3"} {...others} />);
}

export default Component;
