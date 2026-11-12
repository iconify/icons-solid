import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-llkv2cb.css';
import '../../css/m/mb56g9bey.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/f/fw8ogsv2u.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGHw9NpeBD" x2="512" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset=".072" class="mb56g9bey"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGHw9NpeBD)" class="fw8ogsv2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:webtrees-light"} {...others} />);
}

export default Component;
