import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpo4neblx.css';
import '../../css/l/l8-b7wbpb.css';
import '../../css/r/rr-9ahbgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wpo4neblx"/><path class="l8-b7wbpb"/><path clip-rule="evenodd" class="rr-9ahbgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:layout-right-sidebar-flat"} {...others} />);
}

export default Component;
