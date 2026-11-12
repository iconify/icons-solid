import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-c80ro0i.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/t/tszz_sbaj.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGoNspOeJX" x1="110.4" x2="401.6" y1="3.7" y2="508.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="f-c80ro0i"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGoNspOeJX)" class="tszz_sbaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:littlelink-light"} {...others} />);
}

export default Component;
