import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb9i-5hiz.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/d/d8qsu5kec.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGymKzObTV" x1="395.1" x2="134.8" y1="15" y2="465.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="tb9i-5hiz"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGymKzObTV)" class="d8qsu5kec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:drivebase-light"} {...others} />);
}

export default Component;
