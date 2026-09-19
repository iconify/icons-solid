import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suxitebkd.css';
import '../../css/y/yhpn0bbqq.css';
import '../../css/m/mxxkvj7yc.css';
import '../../css/l/lo5w_u_kr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="suxitebkd"/><path class="yhpn0bbqq"/><path class="mxxkvj7yc"/><path class="lo5w_u_kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:stampedenvelope"} {...others} />);
}

export default Component;
