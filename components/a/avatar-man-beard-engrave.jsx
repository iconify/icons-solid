import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vor3rgbln.css';
import '../../css/g/g0_ah_jjj.css';
import '../../css/u/uod1qktsq.css';
import '../../css/l/leo7cev2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vor3rgbln"/><path class="g0_ah_jjj wm-shadow"/><path class="uod1qktsq"/><path class="leo7cev2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-man-beard-engrave"} {...others} />);
}

export default Component;
