import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj5tz6q7m.css';
import '../../css/m/mhyryyb4e.css';
import '../../css/l/lp2p1ll7a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cj5tz6q7m"/><path class="mhyryyb4e"/><path class="lp2p1ll7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:atpay"} {...others} />);
}

export default Component;
