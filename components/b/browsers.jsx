import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rtiyrob2d.css';
import '../../css/o/ohd-xwb1k.css';
import '../../css/f/fv8vjv-xq.css';
import '../../css/w/wldsyeb3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="rtiyrob2d"/><rect class="ohd-xwb1k"/><rect class="fv8vjv-xq"/><path class="wldsyeb3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:browsers"} {...others} />);
}

export default Component;
