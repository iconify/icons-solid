import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/hv6swfkbm.css';
import '../../css/n/nz24x5b_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="hv6swfkbm"/><path class="nz24x5b_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:fast-forward"} {...others} />);
}

export default Component;
