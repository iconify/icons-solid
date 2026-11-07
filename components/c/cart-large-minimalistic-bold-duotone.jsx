import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1mqiebea.css';
import '../../css/b/bqmrjvvdk.css';
import '../../css/x/xggr4mj5e.css';
import '../../css/n/npq7lzc7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q1mqiebea"/><path class="bqmrjvvdk"/><path class="xggr4mj5e"/><path class="npq7lzc7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cart-large-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
