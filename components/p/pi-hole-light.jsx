import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk44qabdq.css';
import '../../css/j/jpd9n3d1o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xk44qabdq"/><path class="jpd9n3d1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pi-hole-light"} {...others} />);
}

export default Component;
