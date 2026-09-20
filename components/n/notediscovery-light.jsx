import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/t/tb9i-5hiz.css';
import '../../css/k/kio5svbfy.css';
import '../../css/f/f63235bvq.css';
import '../../css/f/fcmgnqyju.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGbsx0nxiB" x1="18.297" x2="493.703" y1="18.297" y2="493.703" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="tb9i-5hiz"/></linearGradient><path fill="url(#SVGbsx0nxiB)" class="kio5svbfy"/><path class="f63235bvq"/><circle class="fcmgnqyju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:notediscovery-light"} {...others} />);
}

export default Component;
