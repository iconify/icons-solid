import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwl_jabpn.css';
import '../../css/j/jxfvkgb2p.css';
import '../../css/y/ybddlyukq.css';
import '../../css/r/rmx2knb0y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cwl_jabpn"/><path class="jxfvkgb2p"/><path class="ybddlyukq"/><path class="rmx2knb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:hammer"} {...others} />);
}

export default Component;
