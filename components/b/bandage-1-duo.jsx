import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/feesd1_rx.css';
import '../../css/f/f-md5jbfm.css';
import '../../css/t/t0zturbjd.css';
import '../../css/c/cijadq71m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="feesd1_rx"/><path class="f-md5jbfm"/><path class="t0zturbjd"/><path class="cijadq71m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bandage-1-duo"} {...others} />);
}

export default Component;
