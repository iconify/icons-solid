import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/mu3jqivbv.css';
import '../../css/e/e487-9bwl.css';
import '../../css/v/vxl20rsou.css';
import '../../css/q/qd6c1mbjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="mu3jqivbv wm-shadow"/><path class="e487-9bwl wm-shadow"/><path class="vxl20rsou"/><path class="qd6c1mbjc wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:oven"} {...others} />);
}

export default Component;
