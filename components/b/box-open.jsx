import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qeu3oyboz.css';
import '../../css/o/oxcv_gb7p.css';
import '../../css/n/n__fyrb5e.css';
import '../../css/k/kfwhzrbip.css';
import '../../css/w/w1dxaibuh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qeu3oyboz"/><path class="oxcv_gb7p"/><path clip-rule="evenodd" class="n__fyrb5e"/><path class="kfwhzrbip"/><path clip-rule="evenodd" class="w1dxaibuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:box-open"} {...others} />);
}

export default Component;
