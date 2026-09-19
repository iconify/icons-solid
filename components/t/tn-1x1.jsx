import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srq6p5b9s.css';
import '../../css/g/gxp1ob29q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="srq6p5b9s"/><path class="gxp1ob29q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:tn-1x1"} {...others} />);
}

export default Component;
