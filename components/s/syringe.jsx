import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bmfv-3j8o.css';
import '../../css/r/rqgi9hb-j.css';
import '../../css/k/k_w130bpx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="bmfv-3j8o"/><path class="rqgi9hb-j"/><path class="k_w130bpx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:syringe"} {...others} />);
}

export default Component;
