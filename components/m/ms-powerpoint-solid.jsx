import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qvdpjlbmz.css';
import '../../css/y/yv7vu1bvk.css';

const viewBox = {"width":15,"height":15};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qvdpjlbmz"/><path class="yv7vu1bvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:ms-powerpoint-solid"} {...others} />);
}

export default Component;
