import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kckc1iwlf.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/i/im1e3vbzf.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGaDbyRwJt" x1="211.5" x2="300.5" y1="3.8" y2="508.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="kckc1iwlf"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGaDbyRwJt)" class="im1e3vbzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:priceghost-light"} {...others} />);
}

export default Component;
