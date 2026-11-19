import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmy6ybc5p.css';
import '../../css/q/qwbk6jhrs.css';
import '../../css/z/z-hfbnbmq.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="pmy6ybc5p"/><path class="qwbk6jhrs"/><circle class="z-hfbnbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:telltaledns"} {...others} />);
}

export default Component;
