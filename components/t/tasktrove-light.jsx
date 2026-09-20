import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kckc1iwlf.css';
import '../../css/t/tb9i-5hiz.css';
import '../../css/n/ngr3dgbao.css';
import '../../css/u/u-c8d0j7e.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGNt16HbLe" x1="256" x2="256" y1="512" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" class="kckc1iwlf"/><stop offset="1" class="tb9i-5hiz"/></linearGradient><path fill="url(#SVGNt16HbLe)" class="ngr3dgbao"/><path class="u-c8d0j7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tasktrove-light"} {...others} />);
}

export default Component;
