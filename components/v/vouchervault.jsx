import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/quzxhsgmn.css';
import '../../css/o/o3q9lk3_p.css';
import '../../css/n/nw-hxrxlx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="quzxhsgmn"/><path class="o3q9lk3_p"/><path class="nw-hxrxlx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vouchervault"} {...others} />);
}

export default Component;
