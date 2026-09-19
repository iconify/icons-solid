import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy_d4cc_d.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="yy_d4cc_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:mosquito-net"} {...others} />);
}

export default Component;
