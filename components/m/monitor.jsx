import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/ntzi1w4nm.css';
import '../../css/w/w_k0w4xei.css';
import '../../css/r/r-c_vcb4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ntzi1w4nm"/><path class="w_k0w4xei"/><path class="r-c_vcb4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:monitor"} {...others} />);
}

export default Component;
