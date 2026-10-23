import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/ysni6wxva.css';
import '../../css/k/ks12fepvi.css';
import '../../css/d/d-agg5bah.css';
import '../../css/y/yviokgvuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ysni6wxva"/><path class="ks12fepvi"/><path class="d-agg5bah"/><path class="yviokgvuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:heart-pulse"} {...others} />);
}

export default Component;
