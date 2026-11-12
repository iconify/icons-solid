import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkh-97s-y.css';
import '../../css/k/ksqwkortm.css';
import '../../css/n/nltgbdb4r.css';
import '../../css/i/iaj1vsbvt.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGeB67zdzL" x1="43.5" x2="468.5" y1="43.5" y2="468.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="kkh-97s-y"/><stop offset="1" class="ksqwkortm"/></linearGradient><path fill="url(#SVGeB67zdzL)" class="nltgbdb4r"/><path class="iaj1vsbvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:koshelf"} {...others} />);
}

export default Component;
