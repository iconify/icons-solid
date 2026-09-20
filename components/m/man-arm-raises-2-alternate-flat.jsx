import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnxi2rbnm.css';
import '../../css/h/h6z3hww3z.css';
import '../../css/a/apm68i00d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wnxi2rbnm"><path class="h6z3hww3z"/><path class="apm68i00d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:man-arm-raises-2-alternate-flat"} {...others} />);
}

export default Component;
