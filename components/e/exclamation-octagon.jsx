import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lb_m5_hnk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lb_m5_hnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:exclamation-octagon"} {...others} />);
}

export default Component;
