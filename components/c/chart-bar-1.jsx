import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ulvreypdp.css';
import '../../css/d/d_6nk9tcq.css';
import '../../css/s/sy_7xmbwa.css';
import '../../css/n/n1-j0_bve.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ulvreypdp"/><path clip-rule="evenodd" class="d_6nk9tcq"/><path clip-rule="evenodd" class="sy_7xmbwa"/><path class="n1-j0_bve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:chart-bar-1"} {...others} />);
}

export default Component;
