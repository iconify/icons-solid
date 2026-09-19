import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbplkjbyq.css';
import '../../css/k/kwxt7-bcd.css';
import '../../css/t/tdhbxpx_j.css';
import '../../css/d/dl1372b_m.css';
import '../../css/k/kuelw2b8c.css';
import '../../css/v/v0eeut-rm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fbplkjbyq"/><path class="kwxt7-bcd"/><path class="tdhbxpx_j"/><path class="dl1372b_m"/><path class="kuelw2b8c"/><path class="v0eeut-rm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-eye-off"} {...others} />);
}

export default Component;
