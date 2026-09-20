import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc--wpv5i.css';
import '../../css/s/s0urbhscb.css';
import '../../css/d/d-llkv2cb.css';
import '../../css/j/jhsistbnu.css';
import '../../css/p/phxo31wwg.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGvA5iYcsQ" x1="256" x2="256" y1="506.703" y2="5.298" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".5" class="s0urbhscb"/><stop offset="1" class="d-llkv2cb"/></linearGradient><path fill="url(#SVGvA5iYcsQ)" class="jhsistbnu"/><path class="phxo31wwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:databasement-light"} {...others} />);
}

export default Component;
