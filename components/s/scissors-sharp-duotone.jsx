import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x1q46ybnx.css';
import '../../css/a/a01xlib4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="x1q46ybnx"/><path class="a01xlib4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scissors-sharp-duotone"} {...others} />);
}

export default Component;
