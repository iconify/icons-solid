import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/s/s0urbhscb.css';
import '../../css/c/cppumpo2k.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGbSVJPS2c" x1="71.7" x2="440.3" y1="71.7" y2="440.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="s0urbhscb"/></linearGradient><path fill="url(#SVGbSVJPS2c)" class="cppumpo2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:foldergram-light"} {...others} />);
}

export default Component;
