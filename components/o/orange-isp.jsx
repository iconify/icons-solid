import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8oh0_brq.css';
import '../../css/z/zb1p0hbcy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x8oh0_brq"/><path class="zb1p0hbcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:orange-isp"} {...others} />);
}

export default Component;
