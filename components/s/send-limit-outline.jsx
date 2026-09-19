import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/qf6757bna.css';
import '../../css/b/bvdfp-bfv.css';
import '../../css/i/i9cp4bbah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="qf6757bna"/><circle class="bvdfp-bfv"/><path class="i9cp4bbah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:send-limit-outline"} {...others} />);
}

export default Component;
