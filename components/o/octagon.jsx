import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fp00jbqxq.css';
import '../../css/c/cxsu3gbwu.css';
import '../../css/d/dpcidl-rd.css';
import '../../css/p/pm_m9qbfd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fp00jbqxq"/><path class="cxsu3gbwu"/><path clip-rule="evenodd" class="dpcidl-rd"/><path class="pm_m9qbfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:octagon"} {...others} />);
}

export default Component;
