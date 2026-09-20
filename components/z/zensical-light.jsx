import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/t/tb9i-5hiz.css';
import '../../css/s/skuty4bhr.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGrRcUkbyb" x1="111.475" x2="113.525" y1="535.995" y2="535.995" gradientTransform="rotate(135 13750.543 72930.855)scale(-249.7442 249.7442)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="tb9i-5hiz"/></linearGradient><path fill="url(#SVGrRcUkbyb)" class="skuty4bhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zensical-light"} {...others} />);
}

export default Component;
