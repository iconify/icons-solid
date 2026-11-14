import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkvp4xbpd.css';
import '../../css/e/ese89goyc.css';
import '../../css/e/e2seydwgk.css';
import '../../css/u/utsg8o05b.css';
import '../../css/m/m0qrjrhvu.css';
import '../../css/t/ter_-f-od.css';
import '../../css/v/vq3temb8e.css';
import '../../css/p/pgovukfwd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zkvp4xbpd"/><path class="ese89goyc"/><path class="e2seydwgk"/><path class="utsg8o05b"/><path class="m0qrjrhvu"/><path class="ter_-f-od"/><path class="vq3temb8e"/><path class="pgovukfwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:komga"} {...others} />);
}

export default Component;
