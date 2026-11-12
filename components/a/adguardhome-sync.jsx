import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf4cxs7wl.css';
import '../../css/p/p4ue24b-l.css';
import '../../css/i/ir4rni1pd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kf4cxs7wl"/><path class="p4ue24b-l"/><path class="ir4rni1pd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adguardhome-sync"} {...others} />);
}

export default Component;
