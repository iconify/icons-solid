import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djhwg7uhq.css';
import '../../css/n/ncl-bp61j.css';
import '../../css/k/k4liqx2ro.css';
import '../../css/v/vwu45visp.css';
import '../../css/u/ue0ar7bfh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="djhwg7uhq"/><path class="ncl-bp61j"/><path class="k4liqx2ro"/><path class="vwu45visp"/><path class="ue0ar7bfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:upload-picture"} {...others} />);
}

export default Component;
