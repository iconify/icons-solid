import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhbtucwnq.css';
import '../../css/c/ckrfkccuv.css';
import '../../css/u/ugul67fgy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qhbtucwnq"/><ellipse class="ckrfkccuv"/><path class="ugul67fgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:etesync"} {...others} />);
}

export default Component;
